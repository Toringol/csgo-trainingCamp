import React from 'react'
import { NavbarHome } from './NavbarHome'

export const Block = () => (
    <div className="block">
        <NavbarHome />
        <br />
        <div>
            <p>
                Release Notes for 6/11/2020
                <br />
                2020.06.11 - <img className="cs-logo" src={process.env.PUBLIC_URL + '/cs-logo.png'} alt="cs-logo"></img>
            </p>
            <br />
            <p>
                [MISC] – Added a new game communication setting “Text Filtering” which is
                <br />
                enabled by default and blocks profane words used in text chat.
                <br />
                – Fixed a trigger_bomb_reset regression.
            </p>
            <br /><br />
        </div>
        <div>
            <p>
                Release Notes for 6/3/2020
                <br />
                2020.06.03 - <img className="cs-logo" src={process.env.PUBLIC_URL + '/cs-logo.png'} alt="cs-logo"></img>
            </p>
            <br />
            <p>
                [RENDERING]<br />
                – Texture streaming now loads textures flagged with<br />
                no mip maps or no lod at full initial resolution.
            </p>
            <br />
            <p>
                [MAPS]<br />
                Chlorine<br />
                -Added missing glowy eyes texture
            </p>
            <br />
            <p>
                Anubis<br />
                -Fixed many minor issues such as z fighting, prop reflections and invisible faces<br />
                -Improved player readability at canal<br />
                -Improved performance<br />
                -Redesigned B main path & entrance<br />
                -Moved up CT spawn
            </p>
            <br />
        </div>
    </div>
)