import React from 'react'
import './HomePg.css'
import Board from '../../components/board/Board'
import Currents from '../../components/currents/Currents'
import Pins from '../../components/pins/Pins'
import Profile from '../../components/profile/Profile'

const HomePg = () => {
  return (
    <div className='home'>
      <Board className='widget'/>
      <Currents className='widget'/>
      <Pins className='widget'/>
      <Profile className='widget'/>
    </div>
  )
}

export default HomePg
