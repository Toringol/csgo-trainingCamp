import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { Block } from '../components/Block';
import { NavbarHome } from '../components/NavbarHome';

export const Home = () => {

    const [updates, setUpdates] = useState("");

    axios.get(`https://toringolimagestorage.s3.eu-north-1.amazonaws.com/news/updates.html`, {
        responseType: 'text'
    })
        .then(response => {
            if (response.status === 200 && response.data !== null) {
                const data = response.data;
                setUpdates(data);
            }  
        });
    
    return (
        <Fragment>
            <Block>
                <NavbarHome />
                
                <br />
                <div dangerouslySetInnerHTML={{__html: updates}} />
               
            </Block>
        </Fragment>
    )
}
