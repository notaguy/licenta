import { THEME_TILES_MAP } from '../../utils/constante';
import MapTiles from './MapTiles'

export default function BackgroundTiles({level}){
    const wallsWidth = level.walkableWidth + 1;
    const wallsHeight = level.walkableHeight + 1;
    const tileSet = THEME_TILES_MAP[level.theme];

    //functia care decide ce tile de background sa die
    function getBackground(x,y){
        if(x===0)
        {
            return tileSet.LEFT;
        }
        else if(y===0)
        {
            return tileSet.TOP;
        }
        else if(x===wallsWidth)
        {
            return tileSet.RIGHT;
        }
        else if(y===wallsHeight)
        {
            return tileSet.BOTTOM;
        }
        return tileSet.FLOOR;
    }

    let map = [];
    for(let y=0;y<=wallsHeight;y++)
    {
        for(let x=0;x<=wallsWidth;x++)
        {
            if (y === wallsHeight || y===0) {
                if (x === 0 || x === wallsWidth) {
                  continue;
                }
              }
            map.push(
                <MapTiles key={`${x}_${y}`} x={x} y={y} spriteCoord={getBackground(x,y)}/>
            )
        }
    }

    return <div>{map}</div>;
}