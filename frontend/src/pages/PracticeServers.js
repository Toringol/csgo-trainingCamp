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

export const PracticeServers = () => {
    return (
        <Fragment>
            <div style={GeneralContentStyle}>
                <ClickableImage ImageName="CompetitiveAim" PageName="/blog"></ClickableImage>
                <ClickableImage ImageName="DM" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="AWPDM" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="Retake" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="Duels" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="PistolDM" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="AWP" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="Arena" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="BHOP" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="Surf" PageName="/servers"></ClickableImage>
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