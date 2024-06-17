import React from 'react'
import './Profile.css'
import profile from '../../assets/profile.png'

const Profile = () => {
  return (
    <div className='profile-container'>
      <h1 className='profile-heading'>My Profile</h1>
      <img className='profile-icon' src={profile}/>
      <h2 className='username'>Mary Allen</h2>
      <h3 className='achievements'>Achievements</h3>
    </div>
  )
}

export default Profile
