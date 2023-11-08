import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <>
      <nav className='header'>
        <a className='header__nav-logo' href='/'>Logo</a>
        <ul className='header__nav-lista'>
          <li className='header__nav-lista-elemento'>
            <a href='/Home' className='header__lista-elemento-a'>Home</a>
          </li>
          <li className='header__nav-lista-elemento'>
            <a className='header__lista-elemento-a' href='/Dashboard'>Dashboard</a>
          </li>
          <li className='header__nav-lista-elemento'>
            <a className='header__lista-elemento-a' href='/Login'>Login</a>
          </li>
          <li className='header__nav-lista-elemento'>
            <a className='header__lista-elemento-a' href='/Singup'>Singup</a>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Header
