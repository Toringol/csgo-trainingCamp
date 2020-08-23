import React, {Fragment} from 'react';
import ClickableImage from '../components/ClickableImage'

const GeneralContentStyle = {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alighItems: "center"
}

const TextStyle = {
    position: "relative",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1rem",
    top: "45%",
    color: "#F2F3F4",
}

export const Training = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
                <ClickableImage PageName="Training" 
                                ImageName="PracticeServers"
                                ToPageName="/servers" 
                                Height="40rem" 
                                Width="25rem"
                                MarginRight="3rem" 
                                MarginLeft="3rem"
                                BackgrounSize="400%">
                                    <plaintext className="TCtext" style={TextStyle}>PracticeServers</plaintext> 
                </ClickableImage> 
                <ClickableImage PageName="Training" 
                                ImageName="Theory"
                                ToPageName="/theory" 
                                Height="40rem" 
                                Width="25rem" 
                                MarginRight="3rem" 
                                MarginLeft="3rem"
                                BackgrounSize="400%">
                                    <plaintext className="TCtext" style={TextStyle}>Theory</plaintext> 
                </ClickableImage>
                <ClickableImage PageName="Training" 
                                ImageName="TacticEditor" 
                                ToPageName="/servers" 
                                Height="40rem" 
                                Width="25rem" 
                                MarginRight="3rem" 
                                MarginLeft="3rem"
                                BackgrounSize="350%">
                                    <plaintext className="TCtext" style={TextStyle}>TacticEditor</plaintext> 
                </ClickableImage>
            </div>
        </Fragment>
    )
}