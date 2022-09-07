import React, { useState } from 'react'
import GameInit from './GameInit';
import GameRun from './GameRun';
import GameEnd from './GameEnd';

function Game() {
    const [gamePhase, setGamePhase] = useState(1);
    const [boardSize, setBoardSize] = useState(6);
    const [maxSteps, setMaxSteps] = useState(10);
    const [history, setHistory] = useState(null);
  
    const progress = (history) => {
        gamePhase !== 3 ? setGamePhase(gamePhase + 1) : setGamePhase(1);
        if(history) setHistory(history);
    }

    function updateValues(values) {
        setBoardSize(values.board);
        setMaxSteps(values.steps);
    }

    return (
      <div style={{marginTop: '4rem'}}>
        {gamePhase === 1 &&
            <GameInit
                progress={progress}
                updateValues={(val) => {updateValues(val)}}
            />
        }
        {gamePhase === 2 &&
            <GameRun
                progress={progress}
                boardSize={boardSize}
                maxSteps={maxSteps}
            />
        }
        {gamePhase === 3 &&
            <GameEnd stepHistory={history} progress={progress} />
        }
      </div>
    )
}

export default Game