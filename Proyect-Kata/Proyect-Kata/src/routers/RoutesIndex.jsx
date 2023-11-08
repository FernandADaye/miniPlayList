import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Singup } from '@/pages'

const Routesindex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/singup' element={<Singup />} />
      <Route path='/secret' element={<Secret />} />
    </Routes>
  )
}

export default Routesindex
