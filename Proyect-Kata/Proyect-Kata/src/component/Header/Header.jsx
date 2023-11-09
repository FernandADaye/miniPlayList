import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <>
      <nav className='header'>
        <NavLink
          to='/'
          className='header__nav-logo'
        >Logo
        </NavLink>
        <ul className='header__nav-lista'>
          <li className='header__nav-lista-elemento'>
            <NavLink
              to='/Home'
              className='header__lista-elemento-a'
            >Home
            </NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink
              to='/Dashboard'
              className='header__lista-elemento-a'
            >Dashboard
            </NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink
              to='/Login'
              className='header__lista-elemento-a'
            >Login
            </NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink
              to='/Singup'
              className='header__lista-elemento-a'
            >Singup
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
