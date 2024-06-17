import React from 'react'
import './Menu.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../assets/logo.png'


const Menu = () => {
    const [homeIsClicked, setHomeIsClicked] = useState(false);
    const [listIsClicked, setListIsClicked] = useState(false);
    const [progressIsClicked, setProgressIsClicked] = useState(false);

    const handleHomeClick = () => {
        setListIsClicked(false);
        setProgressIsClicked(false);
        setHomeIsClicked(true);
    }

    const handleListClick = () => {
        setHomeIsClicked(false);
        setProgressIsClicked(false);
        setListIsClicked(true);
    }

    const handleProgressClick = () => {
        setHomeIsClicked(false);
        setListIsClicked(false);
        setProgressIsClicked(true);
    }

  return (
    <div className='menu-container'>
        <img src={logo} className='logo'/>
    <div className='menu'>
        {console.log('home:'+ homeIsClicked)}
        {console.log('list:'+ listIsClicked)}
        {console.log('progress:'+ progressIsClicked)}
      <ul className="links">
        <li>
            <img src={''} className='icon'/>
          <Link to='/home' className={homeIsClicked? 'nav-clicked': 'nav-text'} onClick={handleHomeClick}>Home</Link>
        </li>
        <li>
            <img src={''} className='icon'/>
          <Link to='/my-list' className={listIsClicked? 'nav-clicked': 'nav-text'} onClick={handleListClick}>My List</Link>
        </li>
        <li>
            <img src={''} className='icon'/>
          <Link to='/my-progress' className={progressIsClicked? 'nav-clicked': 'nav-text'} onClick={handleProgressClick}>My Progress</Link>
        </li>
        <li>
            <img src={''} className='icon'/>
          <Link to='/discover' className='nav-text'>Discover</Link>
        </li>
        <li>
            <img src={''} className='icon'/>
          <Link to='/settings' className='nav-text'>Settings</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Menu
