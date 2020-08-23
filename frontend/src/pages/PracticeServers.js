import React, {Fragment} from 'react'
import ClickableImage from '../components/ClickableImage'

const GeneralContentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "raw",
    flexWrap: "wrap",
    alighItems: "center",
    justifyContent: "center"
}

const TextStyle = {
    position: "relative",
    textAlign: "center",
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
    top: "75%",
    color: "#F2F3F4",
}

const TextStyleSmall = {
    position: "relative",
    textAlign: "center",
    fontSize: "1rem",
    top: "75%",
    color: "#D7D2D2",
}

const ImageHeight = "20.5rem"
const ImageWidth = "17rem"
const MarginRight = "3rem"
const MarginLeft = "3rem"
const MarginBottom = "2rem"
const MarginTop = "2rem"

export const PracticeServers = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="CompetitiveAim" 
                                ToPageName="/blog"
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>CompetitiveAim</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="DM" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>DM</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="AWPDM"
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>AWPDM</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>

                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="Retake" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>Retake</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="Duels" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>Duels</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="PistolDM" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>PistolDM</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="AWP" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>AWP</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="Arena" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>Arena</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="BHOP" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth}
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>BHOP</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                <ClickableImage PageName="PracticeServers" 
                                ImageName="Surf" 
                                ToPageName="/servers" 
                                Height={ImageHeight} 
                                Width={ImageWidth} 
                                MarginRight={MarginRight} 
                                MarginLeft={MarginLeft}
                                MarginBottom={MarginBottom}
                                MarginTop={MarginTop}
                                BackgrounSize="120%">
                                    <plaintext className="TCtext" style={TextStyle}>Surf</plaintext>
                                    <plaintext className="TCtext" style={TextStyleSmall}>200 Online</plaintext>
                </ClickableImage>
                {/* <NavLink
                    exact={true} 
                    className="Link_image" 
                    style={GetImageStyle(F)} 
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
                </NavLink> */}
            </div>
        </Fragment>
    )
}