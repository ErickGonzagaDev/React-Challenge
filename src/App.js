import { useState } from "react";
import "./App.css";
import Ball from "./Componente/Ball";

function App() {
    const [balls, setBalls] = useState([]);

    const createBall = (e) => {
        setBalls([
            ...balls,
            { positionX: e.clientX - 6.5, positionY: e.clientY - 62 },
        ]);
    };

    const undo = () => {
        balls.pop();
        setBalls([...balls]);
    };

    const redo = () => {
        setBalls([]);
    };

    return (
        <div className="app">
            <div className="buttons">
                <button onClick={undo}>Desfazer</button>
                <button onClick={redo}>Refazer</button>
            </div>
            <div onMouseDown={createBall} className="campo">
                {balls.map((item, index) => (
                    <Ball
                        key={index}
                        positionX={item.positionX}
                        positionY={item.positionY}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
