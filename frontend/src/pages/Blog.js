import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { Block } from '../components/Block';
import { NavbarHome } from '../components/NavbarHome';
import { BoxLoading } from 'react-loadingg';

export const Blog = () => {

    const [blogNews, setBlogNews] = useState("");
    const [loading, setLoader] = useState(false);

    useEffect(() => {
        const fetchBlogNews = async () => {
            setLoader(true);

            const result = await axios.get(`https://toringolimagestorage.s3.eu-north-1.amazonaws.com/news/blog.html`, {
                responseType: 'text'
            });
            
            setBlogNews(result.data);
            setLoader(false);  
        };

        fetchBlogNews();
    }, []);


    return (
        <Fragment>
            {
                (loading) ? 
                < BoxLoading size="large" color="#27CEC5" />
                :
                <Block>
                    <NavbarHome />
                    
                    <br />
                    <div dangerouslySetInnerHTML={{__html: blogNews}} />
                
                </Block>
            }
        </Fragment>
    )
}