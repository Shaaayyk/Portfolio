import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <NavLink to='' className='header-name'>Shay Kelley</NavLink>
      <div className='nav-container'>
        <NavLink to=''>About</NavLink>
        <NavLink to=''>Projects</NavLink>
        <NavLink to=''>Contact</NavLink>
        <NavLink to=''>Resumé</NavLink>
      </div>
    </div>
  )
}
