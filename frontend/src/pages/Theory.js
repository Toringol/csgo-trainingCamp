import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import ClickableImage from '../components/ClickableImage'

import Inferno from './src/Theory/Inferno.png';
import Mirage from './src/Theory/Mirage.png';
import Overpass from './src/Theory/Overpass.png';
import Cache from './src/Theory/Cache.png';
import Dust2 from './src/Theory/Dust2.png';
import Train from './src/Theory/Train.png';
import Nuke from './src/Theory/Nuke.png';
import Vertigo from './src/Theory/Vertigo.png';

const TextStyle = {
    position: "relative",
    fontSize: "25px",
    top: "80%",
    left: "2%",
    opacity: "100%",
    color: "#F2F3F4"
}

const GeneralContentStyle = {
    width: "95%",
    height: "100%",
    display: "flex",
    flexDirection: "raw",
    flexWrap: "wrap",
    alighItems: "center",
    justifyContent: "center"
}

const ImageHeight = "19rem"
const ImageWidth = "18rem"
const MarginRight = "3rem"
const MarginLeft = "3rem"
const MarginBottom = "2rem"
const MarginTop = "2rem"

export const Theory = () => {
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
                </ClickableImage>
            </div>
        </Fragment>
    )
}