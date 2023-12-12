import './gamePage.css';
import { useEffect} from "react"
import { SPRITE_SOURCE } from '../../utils/constante'
import RenderLevel from '../../components/render/RenderLevel';
import { useRecoilState } from 'recoil';
import {spriteImageAtom} from  '../../atoms/spriteImageAtom'

export default function Game(){

    //const [spriteImage, setSpriteImage] = useState(null);
    const [spriteImage, setSpriteImage] = useRecoilState(spriteImageAtom)

    useEffect(() =>{
      const image = new Image();
      image.src = SPRITE_SOURCE;
      image.onload = () => {
        setSpriteImage(image);
      };
    },[setSpriteImage]);
  
    if(!spriteImage)
    {
      return null;
    }
  
    console.log(spriteImage);

    return<>
    <div className="game">
        <RenderLevel/>
       
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