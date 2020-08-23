package tools

import (
	"bytes"
	"errors"
	"io"
	"io/ioutil"
	"net/http"
	"regexp"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/spf13/viper"
	"golang.org/x/net/html"
)

func checkPosts(doc *html.Node) (*html.Node, error) {
	var body *html.Node
	var crawler func(*html.Node)
	crawler = func(node *html.Node) {
		if node.Type == html.ElementNode && node.Data == "div" {
			for _, div := range node.Attr {
				if div.Key == "id" && div.Val == "post_container" {
					body = node
					return
				}
			}
		}
		for child := node.FirstChild; child != nil; child = child.NextSibling {
			crawler(child)
		}
	}
	crawler(doc)
	if body != nil {
		return body, nil
	}
	return nil, errors.New("Missing <div> in the node tree")
}

func renderNode(n *html.Node) string {
	var buf bytes.Buffer
	w := io.Writer(&buf)
	html.Render(w, n)
	return buf.String()
}

func updatesCrowler() (string, error) {
	url := viper.GetString("updatesUrl")

	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respHTML, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	doc, err := html.Parse(strings.NewReader(string(respHTML)))
	if err != nil {
		return "", err
	}

	postNode, err := checkPosts(doc)
	if err != nil {
		return "", err
	}

	posts := renderNode(postNode)

	regForRefs := regexp.MustCompile(`(\<a(/?[^\>]+)\>)|</a>`)
	regForShareLinks := regexp.MustCompile(`<div\sclass="sharelinks">\n.*\n.*\n.*\n.*</div>`)

	posts = regForShareLinks.ReplaceAllString(regForRefs.ReplaceAllString(posts, ""), "")

	return posts, nil
}

func blogCrowler() (string, error) {
	url := viper.GetString("blogUrl")

	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respHTML, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	doc, err := html.Parse(strings.NewReader(string(respHTML)))
	if err != nil {
		return "", err
	}

	postNode, err := checkPosts(doc)
	if err != nil {
		return "", err
	}

	posts := renderNode(postNode)

	regForRefs := regexp.MustCompile(`(\<a(/?[^\>]+)\>)|</a>`)
	regForShareLinks := regexp.MustCompile(`<div\sclass="sharelinks">\n.*\n.*\n.*\n.*</div>`)

	posts = regForShareLinks.ReplaceAllString(regForRefs.ReplaceAllString(posts, ""), "")

	return posts, nil
}

func uploadNewsFileToS3(s *session.Session, buffer string, fileName string) (string, error) {
	// create a unique file name for the file
	tempFileName := "news/" + fileName + ".html"

	// config settings
	_, err := s3.New(s).PutObject(&s3.PutObjectInput{
		Bucket:               aws.String("toringolimagestorage"),
		Key:                  aws.String(tempFileName),
		ACL:                  aws.String("public-read"),
		Body:                 bytes.NewReader([]byte(buffer)),
		ContentLength:        aws.Int64(int64(len(buffer))),
		ContentType:          aws.String(http.DetectContentType([]byte(buffer))),
		ContentDisposition:   aws.String("attachment"),
		ServerSideEncryption: aws.String("AES256"),
		StorageClass:         aws.String("INTELLIGENT_TIERING"),
	})
	if err != nil {
		return "", err
	}

	return tempFileName, err
}

// LoadNews - parse site with news, get blog and updates
// save it on s3 bucket
func LoadNews() error {
	updatesNews, err := updatesCrowler()
	if err != nil {
		return err
	}

	blogNews, err := blogCrowler()
	if err != nil {
		return err
	}

	// create an AWS session which can be
	// reused if we're uploading many files
	s, err := session.NewSession(&aws.Config{
		Region: aws.String("eu-north-1"),
		Credentials: credentials.NewStaticCredentials(
			viper.GetString("accessKeyID"),     // id
			viper.GetString("secretAccessKey"), // secret
			""),                                // token can be left blank for now
	})
	if err != nil {
		return err
	}

	_, err = uploadNewsFileToS3(s, updatesNews, "updates")
	if err != nil {
		return err
	}

	_, err = uploadNewsFileToS3(s, blogNews, "blog")
	if err != nil {
		return err
	}

	return nil
}
