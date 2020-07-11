import React, {Fragment} from 'react';
import PracticeServers from './src/PracticeServers.png';
import TacticEditor from './src/TacticEditor.png';
import Theory from './src/Theory.png';

export const Training = () => {
    return (
        <Fragment>
            <a href="/servers">
                <div className="TrainingCategories" style={{backgroundImage: "url(" + PracticeServers + ")"}}></div>
            </a>
            <a href="/tacticeditor">
                <div className="TrainingCategories" style={{backgroundImage: "url(" + TacticEditor + ")"}}></div>
            </a>
            <a href="/theory">
                <div className="TrainingCategories" style={{backgroundImage: "url(" + Theory + ")"}}></div>
            </a>
        </Fragment>
    )
}