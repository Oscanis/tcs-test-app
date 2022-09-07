import React from 'react'

function GameEnd({stepHistory, progress}) {
  return (
    <div>
        <p>Step History:</p>
        <ol style={{margin: '20px auto', width: '120px'}}>
            {stepHistory.map((item, index) => {
                            return (
                            <li>{JSON.stringify(item)}</li>
                            );
                        })
            }
        </ol>
        <button onClick={() => progress(null)}>Restart</button>
    </div>
  )
}

export default GameEnd