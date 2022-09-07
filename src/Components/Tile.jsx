import React from 'react'

function Tile({bgColor, selected = false}) {
  const tileStyle = {
    height: '3rem',
    width: '3rem',
    border: '1px solid black',
    backgroundColor: selected ? 'yellow' : bgColor
  }

  return (
    <div className='tile' style={tileStyle}></div>
  )
}

export default Tile