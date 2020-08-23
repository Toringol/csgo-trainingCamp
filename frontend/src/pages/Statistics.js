import React, {Fragment} from 'react'
import { Block } from '../components/Block'
import CircleImage from './src/Statisctics/circle.png'
import { makeStyles } from '@material-ui/core/styles';
import Cup from './src/Statisctics/cup.png'
import Headshot from './src/Statisctics/headshot.png'
import AimImage from './src/Statisctics/aim.png'

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
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
    Headshot: {
        marginLeft: "10%",
        width: "30%", 
        height: "100%", 
        backgroundImage: "url(" + Headshot + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "70%",
    },
    Aim: {
        marginLeft: "10%",
        width: "30%", 
        height: "100%", 
        backgroundImage: "url(" + AimImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "70%",
    },
    Percentage: {
        fontSize: 35,
        width: "60%", 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    EntryLine: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    Line: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
    }
}));


export const Statistics = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Block style={{ padding: 0 }}>
                <div style={StatisticArea}>

                    {/* Nickname */}
                    <div style={Nickname}>
                        <plaintext>Toringol</plaintext>
                    </div>

                    {/* Avatar */}
                    <div style={Avatar}></div>

                    {/* Info area */}
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

                    {/* K/D area */}
                    <div style={Object.assign({},   StatisticSubArea, 
                                                    {backgroundImage: "url(" + CircleImage + ")"},
                                                    {backgroundRepeat: "no-repeat"},
                                                    {backgroundPosition: "center"},
                                                    )}>
                        <plaintext style={{fontSize: 19, position: "relative", bottom: "36%", right: "36%"}}>K/D</plaintext>
                        <plaintext style={{fontSize: 35}}>2.16</plaintext>
                    </div>

                    {/* Win rate area */}
                    <div style={StatisticSubArea}>
                        <div className={classes.Header}>
                            <plaintext className={classes.HeaderText}>WIN RATE</plaintext>
                        </div>
                        <div className={classes.Center}>
                            <div className={classes.Cup}></div>
                            <div className={classes.Percentage}>
                                <plaintext>57%</plaintext>
                                <hr style={{color: "#ABABAB", height: "1px", width: "70%", stroke: "solid"}}></hr>
                            </div>
                        </div>
                        <div className={classes.Lower}>
                            <div className={classes.Line}>
                                <plaintext>PLAYED</plaintext>
                                <plaintext>87</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>WON</plaintext>
                                <plaintext>50</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>LOST</plaintext>
                                <plaintext>33</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>DREW</plaintext>
                                <plaintext>4</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                        </div>
                    </div>
                    
                    {/* HS area */}
                    <div style={StatisticSubArea}>
                        <div className={classes.Header}>
                            <plaintext className={classes.HeaderText}>HS %</plaintext>
                        </div>
                        <div className={classes.Center}>
                            <div className={classes.Headshot}></div>
                            <div className={classes.Percentage}>
                                <plaintext>16%</plaintext>
                                <hr style={{color: "#ABABAB", height: "1px", width: "70%", stroke: "solid"}}></hr>
                            </div>
                        </div>
                        <div className={classes.Lower}>
                            <div className={classes.Line}>
                                <plaintext>KILLS</plaintext>
                                <plaintext>2522</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>DEATH</plaintext>
                                <plaintext>1168</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>ASSISTS</plaintext>
                                <plaintext>231</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>HEADSHOTS</plaintext>
                                <plaintext>393</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                        </div>
                    </div>

                    {/* ADR area */}
                    <div style={StatisticSubArea}>
                        <div className={classes.Header}>
                            <plaintext className={classes.HeaderText}>ADR</plaintext>
                        </div>
                        <div className={classes.Center}>
                            <div className={classes.Aim}></div>
                            <div className={classes.Percentage}>
                                <plaintext>136</plaintext>
                                <hr style={{color: "#ABABAB", height: "1px", width: "70%", stroke: "solid"}}></hr>
                            </div>
                        </div>
                        <div className={classes.Lower}>
                            <div className={classes.Line}>
                                <plaintext>Damage</plaintext>
                                <plaintext>26636</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                            <div className={classes.Line}>
                                <plaintext>Rounds</plaintext>
                                <plaintext>536</plaintext>
                            </div>
                            <hr style={{color: "#ABABAB", height: "1px", width: "80%", stroke: "solid"}}></hr>
                        </div>
                    </div>
                </div>
            </Block>
        </Fragment>
    )
}
