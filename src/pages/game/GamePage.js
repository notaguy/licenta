import './gamePage.css'

export default function Game(){

    return<>
    <div className="game">
        <div className="gameBody">
            <div className="game-container">
                <canvas className="gameWindow" ></canvas>
            </div>
            
        </div>
       
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