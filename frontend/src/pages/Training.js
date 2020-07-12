import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import PracticeServers from './src/Training/PracticeServers.png';
import TacticEditor from './src/Training/TacticEditor.png';
import Theory from './src/Training/Theory.png';


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

const GeneralContentStyle = {
    width: "95%",
    display: "flex",
    height: "95%",
    flexDirection: "row",
    justifyContent: "center",
}

export const Training = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
                <NavLink exact={true} className="Link_image" style={GetImageStyle(PracticeServers)} to="/servers">
                    <plaintext className="TCtext" style={TextStyle}>PracticeServers</plaintext>
                </NavLink>
                <NavLink exact={true} className="Link_image" style={GetImageStyle(Theory)} to="/theory">
                    <plaintext className="TCtext" style={TextStyle}>Theory</plaintext> 
                </NavLink>
                <NavLink exact={true} className="Link_image" style={GetImageStyle(TacticEditor)} to="/theory">
                    <plaintext className="TCtext" style={TextStyle}>TacticEditor</plaintext> 
                </NavLink>
            </div>
        </Fragment>
    )
}