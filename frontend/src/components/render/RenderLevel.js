import "../../pages/game/gamePage.css"
import {LEVEL_THEMES, THEME_BACKGROUNDS } from "../../utils/constante" 
import BackgroundTiles from "../tiles/BackroundTiles"
import LevelPlacement from "./LevelPlacement"

export default function RenderLevel(){

    const level={
        theme: LEVEL_THEMES.BLUE,
     
        walkableWidth: 16,
        walkableHeight: 16,

        placements: [
            {id:0, x: 2, y:0, spriteCoord: "1x0"},
            {id:1, x: 1, y:1, spriteCoord: "1x0"},
            {id:2, x: 2, y:2, spriteCoord: "1x0"},
            {id:3, x: 3, y:3, spriteCoord: "1x0"},
            {id:4, x: 4, y:4, spriteCoord: "1x0"},
            {id:5, x: 5, y:5, spriteCoord: "1x0"},

        ]
    }

    return (
        <div className="gameBody" style={{background: THEME_BACKGROUNDS[level.theme]}}>
            <div className="game-container">
                <BackgroundTiles level={level}/>
                <LevelPlacement level={level}/>
               
                {/* <canvas className="gameWindow" ></canvas> */}
            </div>
            
        </div>
    )
}