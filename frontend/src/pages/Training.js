import React, {Fragment} from 'react';
import PracticeServers from './src/PracticeServers.png';
import TacticEditor from './src/TacticEditor.png';
import Theory from './src/Theory.png';
import {NavLink} from 'react-router-dom'

export const Training = () => {
    return (
        <Fragment>
            <NavLink exact={true} className="categories_nav__link TrainingCategories" style={{backgroundImage: "url(" + PracticeServers + ")"}} to="/servers">
                     <plaintext className="TCtext">PracticeServers</plaintext>
            </NavLink>
            <NavLink exact={true} className="categories_nav__link TrainingCategories" style={{backgroundImage: "url(" + Theory + ")"}} to="/theory">
                <plaintext className="TCtext">Theory</plaintext> 
            </NavLink>
            <NavLink exact={true} className="categories_nav__link TrainingCategories" style={{backgroundImage: "url(" + TacticEditor + ")"}} to="/theory">
                <plaintext className="TCtext">TacticEditor</plaintext> 
            </NavLink>
        </Fragment>
    )
}