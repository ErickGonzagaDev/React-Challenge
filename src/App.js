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

    return (
        <div className="app">
            <div className="buttons">
                <button
                    onClick={() =>
                        setBalls(
                            balls.filter(
                                (item, index) => index !== balls.length - 1
                            )
                        )
                    }
                >
                    Desfazer
                </button>
                <button onClick={() => setBalls([])}>Refazer</button>
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
