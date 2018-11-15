import React from 'react'
import './All.css'

const Square = ({onClick, state, card, id}) => {
  return (
    <div 
      onClick={onClick}
      className={`square ${state}`}
      key={id}
    >
      {card}
    </div>
  )
}


export default Square

