import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userPlayLoad, setuserPlayLoad] = useState(null)

  const login = (token) => {
    localStorage.setItem('token', token)
    const decode = jwtDecode(token)
    setuserPlayLoad(decode)
    setIsAuth(true)
  }
  const logout = () => {
    localStorage.removeItem('token')
    setuserPlayLoad(null)
    setIsAuth(false)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decode = jwtDecode(token)
      setuserPlayLoad(decode)
      setIsAuth(true)
    }
  }, [])
  const data = {
    isAuth,
    userPlayLoad,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
