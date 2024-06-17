import React from 'react'
import './HomePg.css'
import Board from '../../components/board/Board'
import Currents from '../../components/currents/Currents'
import Pins from '../../components/pins/Pins'
// import Profile from '../../components/profile/profile'

const HomePg = () => {
  return (
    <div className='home'>
      <Board/>
      <Pins />
      <Currents />
      {/* <Profile /> */}
    </div>
  )
}

export default HomePg
