import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import Arena from './src/Arena.png';
import AWP from './src/AWP.png';
import AWPDM from './src/AWPDM.png';
import CompetitiveAim from './src/CompetitiveAim.png';
import DM from './src/DM.png';
import Duels from './src/Duels.png';
import PistolDM from './src/PistolDM.png';
import Retake from './src/Retake.png';
import Surf from './src/Surf.png';
import BHOP from './src/BHOP.png';

const RawImages = {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "raw",
    justifyContent: "space-between"
  }

function GetImageStyle(props) {
    const ImageStyle = {
        backgroundImage: "url(" + props + ")",
        width: 290,
        height: 290,
        marginRight: 30,
        marginBottom: 50,
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

const TextStyleSmall = {
    fontSize: "20px",
    top: "210px",
    opacity: "100%",
    color: "#D7D2D2"
}

export const PracticeServers = () => {
    return (
        <Fragment>
            <div style={{ width: "95%", height: "95%", display: "flex", flexDirection: "column", position: "relative", top: "30px" }}>
                <div style={RawImages}>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(CompetitiveAim)} to="/servers">
                            <plaintext className="TCtext" style={TextStyle}>CompetitiveAim</plaintext>
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(DM)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>DM</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(AWPDM)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>AWPDM</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Retake)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Retake</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Duels)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Duels</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                </div>
                <div style={RawImages}>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(PistolDM)} to="/servers">
                        <plaintext className="TCtext" style={TextStyle}>PistolDM</plaintext>
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(AWP)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>AWP</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Arena)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Arena</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(BHOP)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>BHOP</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink exact={true} className="Link_image" style={GetImageStyle(Surf)} to="/theory">
                        <plaintext className="TCtext" style={TextStyle}>Surf</plaintext> 
                        <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                </div>
            </div>
        </Fragment>
    )
}