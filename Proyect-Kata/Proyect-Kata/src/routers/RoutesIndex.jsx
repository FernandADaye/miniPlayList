import React from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Singup } from '@/pages'

const Routesindex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/Login' />}
      />
      <Route path='/singup' element={<Singup />} />

      <Route
        path='/secret'
        element={isAuth ? <Secret /> : <Navigate to='/Login' />}
      />
    </Routes>
  )
}

export default Routesindex
