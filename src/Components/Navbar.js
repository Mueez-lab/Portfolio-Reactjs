import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../Navbar.css'

export default function Navbar() {
  const toggle =()=>
  {
    document.getElementById('toggle-list').classList.toggle('active');
  }
  return (
    <div className='navbar'>
      <nav className='nav'>
        <div className='logo'>
            <h1>
                Portfolio
            </h1>
            </div>
        <FontAwesomeIcon className='bar' icon={faBars} size='2xl' onClick={toggle}/>
        <ul className='nav-items' id='toggle-list'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Service</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Education</a></li>
        </ul>
      </nav>
    </div>
  )
}
