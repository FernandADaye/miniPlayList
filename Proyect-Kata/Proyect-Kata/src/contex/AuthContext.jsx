import { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()
const [isAuth, setIsAuth] = useState(false)
const [userPlayLoad, setuserPlayLoad] = useState(null)

const AuthProvider = ({ children }) => {
  const loding = (token) => {
    localStorage.setItem('token', token)
    const decode= jwtDecode(token)
    setuserPlayLoad(decode)
    setIsAuth(true)
  }
  const logout=()=>{
    localStorage.removeItem('token')
    setuserPlayLoad(null)
    setIsAuth(false)
  }
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}
