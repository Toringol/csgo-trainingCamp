import React from 'react'
import {NavLink} from 'react-router-dom'

function GetImageStyle(props) {
    const Image = require('../pages/src/' + props.PageName + '/' + props.ImageName +'.png');

    const ImageStyle = {
        backgroundImage: "url(" + Image + ")",
        backgroundSize: props.BackgrounSize,
        width: props.Width,
        height: props.Height,
        marginRight: props.MarginLeft,
        marginLeft: props.MarginRight,
        marginBottom: props.MarginBottom,
        marginTop: props.MarginTop,
        backgroundPosition: "center",
        boxSizing: 'border-box',
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        stroke: "solid #F2F3F4",
        textDecoration: "none"
    }
    return ImageStyle;
}

function ClickableImage(props) {
    return (
    <NavLink
        exact={true}
        className="Link_image"
        style={GetImageStyle(props)}
        to={props.ToPageName}>
            {props.children}
    </NavLink>
    )
}

export default ClickableImage;