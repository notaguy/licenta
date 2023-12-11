import { CELL_SIZE } from "../../utils/constante"
import SpriteSheet from "../SpriteSheet"

export default function MapTiles({x,y,spriteCoord, image}){
    return (
        <div style={{
            position: "absolute",
            left: x*CELL_SIZE,
            top: y*CELL_SIZE,
        }}>
            <SpriteSheet spriteCoord={spriteCoord} image={image}/>
        </div>
    )
}