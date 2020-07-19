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


function GetImageStyle(props) {
    const ImageStyle = {
        backgroundImage: "url(" + props + ")",
        backgroundSize: "100%",
        width: "16%",
        height: "40%",
        marginRight: "2%",
        marginLeft: "2%",
        marginBottom: "2%",
        marginTop: "2%"
    }
    return ImageStyle;
}

const TextStyle = {
    fontSize: "25px",
    top: "70%",
    color: "#F2F3F4"
}

const TextStyleSmall = {
    fontSize: "20px",
    top: "70%",
    color: "#D7D2D2",
}

const GeneralContentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "raw",
    flexWrap: "wrap",
    alighItems: "center",
    justifyContent: "center"
}

export const PracticeServers = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
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
        </Fragment>
    )
}