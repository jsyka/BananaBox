import React from 'react'
import './Pins.css'
import cmbyn from '../../assets/movies/cmbyn.jpg'
import pastlives from '../../assets/movies/pastlives.jpg'

const Pins = () => {
  return (
    <div className='pins-container'>
      <h1 className='pins-heading'>Pins</h1>
      <img className='movie' src={cmbyn}/>
      <img className='movie' src={pastlives}/>
      <button className='edit-p'>Edit Pins</button>
    </div>
  )
}

export default Pins
