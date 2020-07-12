import React, {Fragment} from 'react'
import { Block } from '../components/Block'

const StatisticArea = {
    width: 1000,
    height: 700,
    display: "flex",
    justifyContent: "center",
    alighItems: "flex-start",
    alighContent: "flex-start",
    flexWrap: "wrap"

}

const Nickname = {
    display: "block",
    textAlign: "center",
    width: "100%",
    paddingTop: 10,
    fontSize: 24,
    color: "#F2F3F4",
    height: "fit-content"
}

const Test = {
    width: "30%",
    height: "45%",
    background: "red",
    marginRight: 10,

}

export const Statistics = () => {
    return (
        <Fragment>
            <Block style={{ padding: 0 }}>
                <div style={StatisticArea}>
                    <div style={Nickname}>
                        <plaintext>Toringol</plaintext>
                    </div>
                    <div style={Test}></div>
                    <div style={Test}></div>
                    <div style={Test}></div>
                    <div style={Test}></div>
                    <div style={Test}></div>
                    <div style={Test}></div>
                </div>
            </Block>
        </Fragment>
    )
}