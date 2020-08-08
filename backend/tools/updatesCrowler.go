package tools

import (
	"bytes"
	"errors"
	"io"
	"io/ioutil"
	"net/http"
	"strings"

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

func UpdatesCrowler() (string, error) {
	url := viper.GetString("updatesUrl")

	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respHtml, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	doc, err := html.Parse(strings.NewReader(string(respHtml)))
	if err != nil {
		return "", err
	}

	postNode, err := checkPosts(doc)
	if err != nil {
		return "", err
	}

	posts := renderNode(postNode)

	return posts, nil
}
