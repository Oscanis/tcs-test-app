import React, { useState } from 'react'

function GameInit({progress, updateValues}) {
    const [boardVal, setBoardVal] = useState(6);
    const [stepsVal, setStepsVal] = useState(10);

    const updateVals = () => {
        updateValues({board: boardVal, steps: stepsVal});
        progress(null);
    }

    return (
    <>
            <label>Size of board:
                <input
                    type="number"
                    value={boardVal}
                    onChange={(e) => setBoardVal(+e.target.value)}
                />
            </label>
            <label>Max steps:
                <input
                    type="number"
                    value={stepsVal}
                    onChange={(e) => setStepsVal(+e.target.value)}
                />
            </label>
            <button onClick={() => updateVals()}>Submit</button>
    </>
  )
}

export default GameInit