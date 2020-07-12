import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import Inferno from './src/Theory/Inferno.png';
import Mirage from './src/Theory/Mirage.png';
import Overpass from './src/Theory/Overpass.png';
import Cache from './src/Theory/Cache.png';
import Dust2 from './src/Theory/Dust2.png';
import Train from './src/Theory/Train.png';
import Nuke from './src/Theory/Nuke.png';
import Vertigo from './src/Theory/Vertigo.png';



const ImagesRaws = {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "raw",
    justifyContent: "center"
  }

function GetImageStyle(props) {
    const ImageStyle = {
        backgroundImage: "url(" + props + ")",
        width: 310,
        height: 350,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 30
    }
    return ImageStyle;
}

const TextStyle = {
    fontSize: "25px",
    top: "210px",
    opacity: "100%",
    color: "#F2F3F4"
}

const GeneralStyle = {
    width: "85%",
    display: "flex",
    height: "95%",
    flexDirection: "column"
}

export const Theory = () => {
    return (
        <Fragment>
            <div style={GeneralStyle}>
                <div style={ImagesRaws}>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Inferno)} to="/servers">
                            <plaintext className="TCtext" style={TextStyle}>Inferno</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Mirage)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Mirage</plaintext> 
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Overpass)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Overpass</plaintext> 
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Cache)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Cache</plaintext> 
                    </NavLink>
                </div>
                <div style={ImagesRaws}>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Dust2)} to="/servers">
                        <plaintext className="TCtext" style={TextStyle}>Dust2</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Train)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Train</plaintext> 
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Nuke)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Nuke</plaintext> 
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Vertigo)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Vertigo</plaintext> 
                    </NavLink>
                </div>
            </div>
        </Fragment>
    )
}