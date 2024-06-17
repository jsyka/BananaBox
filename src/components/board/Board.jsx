import React from 'react'
import './Board.css'

const Board = () => {
  return (
    <div className='board'>
      <h1 className='heading-board'>
        Board
      </h1>
      <div className='all-number-container'>
      <div className='number-container'>
        <h1>25</h1>
        <h2>books read</h2>
      </div>
      <div className='number-container'>
        <h1>33</h1>
        <h2>movies watched</h2>
      </div>
      <div className='number-container'>
        <h1>10</h1>
        <h2>bookmarked</h2>
      </div>
      <div className='number-container'>
        <h1>3</h1>
        <h2>5-bananas</h2>
      </div>
      </div>
    </div>
  )
}

export default Board
