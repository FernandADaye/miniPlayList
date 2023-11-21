import React from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'

const Secret = () => {
  const { userPlayLoad } = useAuthContext()
  return (
    <>
      <h1>Secret </h1>
      {userPlayLoad?.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola Costomer</h2>}
    </>
  )
}

export default Secret
