import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import Arena from './src/PracticeServers/Arena.png';
import AWP from './src/PracticeServers/AWP.png';
import AWPDM from './src/PracticeServers/AWPDM.png';
import CompetitiveAim from './src/PracticeServers/CompetitiveAim.png';
import DM from './src/PracticeServers/DM.png';
import Duels from './src/PracticeServers/Duels.png';
import PistolDM from './src/PracticeServers/PistolDM.png';
import Retake from './src/PracticeServers/Retake.png';
import Surf from './src/PracticeServers/Surf.png';
import BHOP from './src/PracticeServers/BHOP.png';

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
        width: 300,
        height: 320,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 30
    }
    return ImageStyle;
}

const TextStyle = {
    fontSize: "25px",
    top: "220px",
    color: "#F2F3F4"
}

const TextStyleSmall = {
    fontSize: "20px",
    top: "220px",
    color: "#D7D2D2"
}

const GeneralContentStyle = {
    width: "95%",
    display: "flex",
    height: "95%",
    flexDirection: "column",
}

export const PracticeServers = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
                <div style={ImagesRaws}>
                    <NavLink
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(CompetitiveAim)} 
                        to="/servers">
                            <plaintext className="TCtext" style={TextStyle}>CompetitiveAim</plaintext>
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(DM)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>DM</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(AWPDM)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>AWPDM</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(Retake)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>Retake</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(Duels)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>Duels</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                </div>
                <div style={ImagesRaws}>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(PistolDM)} 
                        to="/servers">
                            <plaintext className="TCtext" style={TextStyle}>PistolDM</plaintext>
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(AWP)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>AWP</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(Arena)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>Arena</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(BHOP)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>BHOP</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                    <NavLink 
                        exact={true} 
                        className="Link_image" 
                        style={GetImageStyle(Surf)} 
                        to="/theory">
                            <plaintext className="TCtext" style={TextStyle}>Surf</plaintext> 
                            <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                    </NavLink>
                </div>
            </div>
        </Fragment>
    )
}