import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Board.css'

const Board = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setMovieList(JSON.parse(savedList));
    }
  }, []);

  const numberOfMovies = movieList.length;
  return (
    <div className='board'>
      <h1 className='heading-board'>
        Board
      </h1>
      <div className='all-number-container'>
      <div className='number-container'>
        <h1>0</h1>
        <h2>books read</h2>
      </div>
      <div className='number-container'>
        <h1>0</h1>
        <h2>movies watched</h2>
      </div>
      <div className='number-container'>
        <h1>{numberOfMovies}</h1>
        <h2>bookmarked</h2>
      </div>
      <div className='number-container'>
        <h1>0</h1>
        <h2>5-bananas</h2>
      </div>
      </div>
    </div>
  )
}

export default Board
