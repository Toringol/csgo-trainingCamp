import React, {Fragment} from 'react'
import { Block } from '../components/Block'
import CircleImage from './src/Statisctics/circle.png'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Cup from './src/Statisctics/cup.png'

const AvatarImage = require('./src/Avatars/man.png');

const StatisticArea = {
    width: 1000,
    height: 700,
    display: "flex",
    justifyContent: "center",
    alighItems: "center",
    alighContent: "center",
    flexWrap: "wrap"
}

const Nickname = {
    textAlign: "center",
    width: "100%",
    paddingTop: 10,
    fontSize: 24,
    color: "#F2F3F4",
    height: "fit-content"
}

const Avatar = {
    backgroundImage: "url(" + AvatarImage + ")",
    backgroundPosition: "center",
    backgroundSize: "100%",
    borderRadius: "50%",
    width: "28%",
    height: "43%",
    marginLeft: 20,
    marginRight: 20
}

const Info = {
    width: "28%",
    height: "43%",
    fontSize: 22,
    marginLeft: 20,
    marginRight: 20
}

const Bleached = {
    width: "100%",
    color: "rgba(242, 243, 244, 0.6)",
}

const StatisticSubArea = {
    width: "28%",
    height: "43%",
    background: "#545454",
    border: "2px solid #F2F3F4",
    boxSizing: "border-box",
    borderRadius: "30px",
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

const Entry = {
    marginTop: "1rem",
    marginBottom: "2rem",
}

const useStyles = makeStyles((theme) => ({
    Header: {
        width: "100%",
        height: "10%",
        marginBottom: "5%"
    },
    HeaderText: {
        position: "relative", 
        top: 15, 
        left: "10%", 
        color: "#F2F3F4",
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: "normal",
    },
    Center: {
        width: "100%",
        height: "25%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    Lower: {
        width: "100%",
        height: "65%",
        backgroundColor: "green"
    },
    Cup: {
        marginLeft: "10%",
        width: "30%", 
        height: "100%", 
        backgroundImage: "url(" + Cup + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "70%",
    },
    Percentage: {
        width: "60%", 
        height: "100%"
    }
}));


export const Statistics = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Block style={{ padding: 0 }}>
                <div style={StatisticArea}>
                    <div style={Nickname}>
                        <plaintext>Toringol</plaintext>
                    </div>

                    <div style={Avatar}></div>

                    <div style={Info}>
                        <div style={Entry}>
                            <small style={Bleached}>Rank</small>
                            <plaintext>Beginner</plaintext>
                        </div>
                        <div style={Entry}>
                            <small style={Bleached}>Title</small>
                            <plaintext>Scream Master</plaintext>
                        </div>
                        <div style={Entry}>
                            <small style={Bleached}>Position in Leaderboard</small>
                            <plaintext style={{}}>#1</plaintext>
                        </div>
                    </div>

                    <div style={Object.assign({},   StatisticSubArea, 
                                                    {backgroundImage: "url(" + CircleImage + ")"},
                                                    {backgroundRepeat: "no-repeat"},
                                                    {backgroundPosition: "center"},
                                                    )}>
                        <plaintext style={{fontSize: 19, position: "relative", bottom: "36%", right: "36%"}}>K/D</plaintext>
                        <plaintext style={{fontSize: 35}}>2.16</plaintext>
                    </div>

                    <div style={StatisticSubArea}>
                        <div className={classes.Header}>
                            <plaintext className={classes.HeaderText}>WIN RATE</plaintext>
                        </div>
                        <div className={classes.Center}>
                            <div className={classes.Cup}></div>
                            <div className={classes.Percentage}>57%</div>
                        </div>
                        <div className={classes.Lower}></div>
                    </div>
                    <div style={StatisticSubArea}></div>
                    <div style={StatisticSubArea}></div>
                </div>
            </Block>
        </Fragment>
    )
}