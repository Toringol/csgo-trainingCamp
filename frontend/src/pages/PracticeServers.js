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
            </div>
        </Fragment>
    )
}