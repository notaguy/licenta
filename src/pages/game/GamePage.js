import './gamePage.css';

import {useState, useEffect} from "react"
import { SPRITE_SOURCE } from '../../utils/constante'
import RenderLevel from '../../components/render/RenderLevel';

export default function Game(){

    const [spriteImage, setSpriteImage] = useState(null);
    useEffect(() =>{
      const image = new Image();
      image.src = SPRITE_SOURCE;
      image.onload = () => {
        setSpriteImage(image);
      };
    },[]);
  
    if(!spriteImage)
    {
      return null;
    }
  
    console.log(spriteImage);

    return<>
    <div className="game">
        <RenderLevel spriteImage={spriteImage}/>
       
        <div className="info">

        </div>
        <div className="compiler">
            <div className="editor">
                <textarea></textarea>
                <div className="butoane">
                    <button>Ruleaza</button>
                    <button>Ruleaza pe rand</button>
                    <button>Ajutor</button>
                </div>
                
            </div>
        </div>
    </div>
    
    </>
       
}