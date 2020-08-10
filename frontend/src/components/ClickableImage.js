import React from 'react'
import {NavLink} from 'react-router-dom'

function GetImageStyle(props) {
    const Image = require('../pages/src/Training/' + props +'.png'); // with require

    const ImageStyle = {
        backgroundImage: "url(" + Image + ")",
        backgroundSize: "130%",
        // width: 300,
        // height: 350,
        width: "20rem",
        height: "23rem",
        marginRight: "1%",
        marginLeft: "1%",
        marginBottom: "1%",
        marginTop: "1%",
        backgroundPosition: "center",
        boxSizing: 'border-box',
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        stroke: "solid #F2F3F4"
    }
    return ImageStyle;
}

const TextStyle = {
    position: "relative",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1rem",
    top: "70%",
    color: "#F2F3F4"
}

const TextStyleSmall = {
    position: "relative",
    textAlign: "center",
    fontSize: "1.4rem",
    top: "70%",
    color: "#D7D2D2",
}



function ClickableImage(props) {
    return <NavLink
                exact={true} 
                className="Link_image" 
                style={GetImageStyle(props.ImageName)}  
                to={props.PageName}>
                    <plaintext className="TCtext" style={TextStyle}>{props.ImageName}</plaintext>
                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
            </NavLink>
}

export default ClickableImage;