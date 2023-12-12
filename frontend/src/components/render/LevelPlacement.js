import { CELL_SIZE } from "../../utils/constante";
import SpriteSheet from '../SpriteSheet' 


export default function LevelPlacement({level}){

    return(
        level.placements.map(place => {

            const x = place.x * CELL_SIZE + "px";
            const y = place.y * CELL_SIZE + "px";
            const style = {
                position: 'absolute',
                /*se folosesc backticks nu ghilimele aparent */
                transform: `translate3d(${x}, ${y}, 0)`,
            };
        
            return(
                <div key={place.id} style={style}>
                    <SpriteSheet spriteCoord={place.spriteCoord}/>
                </div>
            )
        })
    )
}

