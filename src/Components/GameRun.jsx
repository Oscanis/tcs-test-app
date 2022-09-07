import React, { useState, useEffect } from 'react';
import Tile from './Tile';

function GameRun({progress, boardSize, maxSteps}) {
    const [steps, setSteps] = useState(maxSteps);
    const [stepHistory, setStepHistory] = useState([]);
    const [selected, setSelected] = useState({x: 0, y: 0});

    //initializing the board
    let board = new Array(boardSize);

    for(let y = 0; y < boardSize; y++) {
        board[y] = new Array(boardSize);
        for(let x = 0; x < boardSize; x++) {
            let bgColor = (y+x) % 2 === 0 ? "white" : "grey";
            if(selected.x === x && selected.y === y) bgColor = "yellow";
            board[y].push(<Tile bgColor={bgColor} />);
        }
    }

    //handling keyboard events
    useEffect(() => {
        const handleKeyUp = (e) => {
            if(steps > 0) {
                switch(e.keyCode) {
                    case 38:
                        if(selected.x > 0) setSelected({x: selected.x-1, y: selected.y});
                        break;
                    case 40:
                        if(selected.x < boardSize-1) setSelected({x: selected.x+1, y: selected.y});
                        break;
                    case 37:
                        if(selected.y > 0) setSelected({x: selected.x, y: selected.y-1});
                        break;
                    case 39:
                        if(selected.y < boardSize-1) setSelected({x: selected.x, y: selected.y+1});
                        break;
                    default:
                        break;
                }
                setSteps(steps-1);
                setStepHistory(current => [...current, selected]);
            }
        }
      
        window.document.addEventListener('keyup', handleKeyUp);
      
        return () => {
          window.document.removeEventListener('keyup', handleKeyUp);
        }
    }, [boardSize, progress, selected, steps, stepHistory]);

    useEffect(() => {
        if (steps === 0) progress(stepHistory);
    }, [progress, steps, stepHistory])

    return (
        <div style={{margin: 'auto'}}>
            <p>Steps remaining: {steps}</p>
            <p>Selected tile: {selected.x}, {selected.y}</p>
            <div style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                {board.map((items, index) => {
                        return (
                        <div>
                            {items.map((subItems, sIndex) => {
                            return subItems;
                            })}
                        </div>
                        );
                    })
                }
            </div>
        </div>
  )
}

export default GameRun