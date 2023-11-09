import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <>
      <nav className='header'>
        <NavLink className='header__nav-logo' href='/'>Logo</NavLink>
        <ul className='header__nav-lista'>
          <li className='header__nav-lista-elemento'>
            <NavLink href='/Home' className='header__lista-elemento-a'>Home</NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink className='header__lista-elemento-a' href='/Dashboard'>Dashboard</NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink className='header__lista-elemento-a' href='/Login'>Login</NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink className='header__lista-elemento-a' href='/Singup'>Singup</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
