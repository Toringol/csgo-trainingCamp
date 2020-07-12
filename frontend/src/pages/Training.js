import React, {Fragment} from 'react';
import PracticeServers from './src/PracticeServers.png';
import TacticEditor from './src/TacticEditor.png';
import Theory from './src/Theory.png';
import {NavLink} from 'react-router-dom'

const TextStyle = {
    top: "250px"
}

//Return style component with background image. This image is taken from arg.
function GetImageStyle(props) {
    const ImageStyle = {
        backgroundImage: "url(" + props + ")",
    }
    return ImageStyle;
}

export const Training = () => {
    return (
        <Fragment>
            <NavLink exact={true} className="Link_image" style={GetImageStyle(PracticeServers)} to="/servers">
                <plaintext className="TCtext" style={TextStyle}>PracticeServers</plaintext>
            </NavLink>
            <NavLink exact={true} className="Link_image" style={GetImageStyle(Theory)} to="/theory">
                <plaintext className="TCtext" style={TextStyle}>Theory</plaintext> 
            </NavLink>
            <NavLink exact={true} className="Link_image" style={GetImageStyle(TacticEditor)} to="/theory">
                <plaintext className="TCtext" style={TextStyle}>TacticEditor</plaintext> 
            </NavLink>
        </Fragment>
    )
}