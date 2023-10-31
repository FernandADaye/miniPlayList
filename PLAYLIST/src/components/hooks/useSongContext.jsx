import { useContext } from 'react'
import { SongContext } from '../context/SongContext'
export const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('Error')
  }
  return context
}
