import {useEffect, useRef} from "react";
import { CELL_SIZE } from "../utils/constante";
import React from 'react'

function SpriteSheet({image, spriteCoord , size=16}){
    const canvasRef = useRef();
    useEffect(()=>{
        // /** @type{HTMLCanvasElement} */
        const canvasEl=canvasRef.current;
        const ctx =  canvasEl.getContext("2d");

        //daca se schimba ceva din graphics, se curata 
        ctx.clearRect(0,0,canvasEl.width, canvasEl.height);

        //o sa primesc un string pt coordonate de tipul "1x0" pt a sti din spritesheet cu iau
        const tileX = Number(spriteCoord.split("x")[0]);
        const tileY = Number(spriteCoord.split("x")[1]);

        ctx.drawImage(
            //imaginea din care extragem
            image,
            //coltul stanga sus
            tileX * CELL_SIZE,
            tileY * CELL_SIZE,
            //cat sa tai din spritesheet x si y
            size,
            size,
            //unde sa fie plasat pe canvas x si y
            0,
            0,
            //scalarea x si y
            size,
            size
        );
    },[image, spriteCoord, size]);

    return (
        //ref pt a putea comunica cu canvasul
        <canvas width={size} height={size} ref={canvasRef}/>
    )
}

const MemoizedSprite = React.memo(SpriteSheet);
export default MemoizedSprite;