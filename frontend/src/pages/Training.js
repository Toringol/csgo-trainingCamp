import React, {Fragment} from 'react';
import ClickableImage from '../components/ClickableImage'


const TextStyle = {
    top: "250px"
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
                <ClickableImage ImageName="PracticeServers" PageName="/servers"></ClickableImage>
                <ClickableImage ImageName="Theory" PageName="/theory"></ClickableImage>
                <ClickableImage ImageName="TacticEditor" PageName="/servers"></ClickableImage>
            </div>
        </Fragment>
    )
}