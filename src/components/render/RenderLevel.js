import "../../pages/game/gamePage.css"
import { CELL_SIZE, LEVEL_THEMES, THEME_BACKGROUNDS } from "../../utils/constante"
import SpriteSheet from '../SpriteSheet' 
import BackgroundTiles from "./BackroundTiles"

export default function RenderLevel({spriteImage}){

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
                <BackgroundTiles level={level} image={spriteImage}/>
                {level.placements.map(place => {

                    const x = place.x * CELL_SIZE + "px";
                    const y = place.y * CELL_SIZE + "px";
                    const style = {
                        position: 'absolute',
                        /*se folosesc backticks nu ghilimele aparent */
                        transform: `translate3d(${x}, ${y}, 0)`,
                    };

                    return(
                        <div key={place.id} style={style}>
                            <SpriteSheet image={spriteImage} spriteCoord={place.spriteCoord}/>
                        </div>
                    )
                })}
               
                {/* <canvas className="gameWindow" ></canvas> */}
            </div>
            
        </div>
    )
}