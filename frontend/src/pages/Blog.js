import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { Block } from '../components/Block';
import { NavbarHome } from '../components/NavbarHome';

export const Blog = () => {

    const [blogNews, setBlogNews] = useState("");

    axios.get(`https://toringolimagestorage.s3.eu-north-1.amazonaws.com/news/blog.html`, {
        responseType: 'text'
    })
        .then(response => {
            if (response.status === 200 && response.data !== null) {
                const data = response.data;
                setBlogNews(data);
            }  
        });

    return (
        <Fragment>
            <Block>
                <NavbarHome />

                <br />
                <div dangerouslySetInnerHTML={{__html: blogNews}} />
            
            </Block>
        </Fragment>
    )
}