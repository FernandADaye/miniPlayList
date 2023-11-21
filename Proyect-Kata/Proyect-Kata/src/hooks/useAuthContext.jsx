import { useContext } from 'react'
import { AuthContext } from '@/contex/AuthContext'
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('carajo')
  }
  return context
}
