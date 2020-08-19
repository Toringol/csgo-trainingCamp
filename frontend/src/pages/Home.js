import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { Block } from '../components/Block';
import { NavbarHome } from '../components/NavbarHome';
import { BoxLoading } from 'react-loadingg';

export const Home = () => {

    const [updates, setUpdates] = useState("");
    const [loading, setLoader] = useState(false);

    useEffect(() => {
        const fetchUpdates = async () => {
            setLoader(true);

            const result = await axios.get(`https://toringolimagestorage.s3.eu-north-1.amazonaws.com/news/updates.html`, {
                responseType: 'text'
            });
            
            setUpdates(result.data);
            setLoader(false);  
        };

        fetchUpdates();
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
                    <div dangerouslySetInnerHTML={{__html: updates}} />
                
                </Block>
            }
        </Fragment>
    )
}
