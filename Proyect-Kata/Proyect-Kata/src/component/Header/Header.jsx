import React from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const LinkIsActive = (isActive) => {
    return isActive ? 'header__lista-elemento-a-selected' : 'header__nav-lista-elemento'
  }
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
              className={({ isActive }) => LinkIsActive(isActive)}
            >Home
            </NavLink>
          </li>
          <li className='header__nav-lista-elemento'>
            <NavLink
              to='/Dashboard'
              className={({ isActive }) => LinkIsActive(isActive)}
            >Dashboard
            </NavLink>
          </li>
          {isAuth
            ? (
              <>
                <li className='header__nav-lista-elemento'>
                  <NavLink
                    to='/secret'
                    className={({ isActive }) => LinkIsActive(isActive)}
                  >Secret
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/home'
                    onClick={logout}
                    className='header__nav-lista-elemento'
                  >LogOut
                  </NavLink>
                </li>
              </>
              )
            : (
              <>
                <li className='header__nav-lista-elemento'>
                  <NavLink
                    to='/Login'
                    className={({ isActive }) => LinkIsActive(isActive)}
                  >Login
                  </NavLink>
                </li>
                <li className='header__nav-lista-elemento'>
                  <NavLink
                    to='/Singup'
                    className={({ isActive }) => LinkIsActive(isActive)}
                  >Singup
                  </NavLink>
                </li>
              </>
              )}

        </ul>
      </nav>
    </>
  )
}

export default Header
