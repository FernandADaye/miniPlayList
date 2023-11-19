import { useContext } from 'react'
import { AuthContext } from '@/contex/AuthContext'
export const useSongContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Error')
  }
  return context
}
