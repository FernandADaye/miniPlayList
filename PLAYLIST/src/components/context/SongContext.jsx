import React, { useEffect, useState, createContext } from 'react'
// Importacion de la basa que datos que contiene JSON
import canciones from '@/assets/listaCanciones.json'

const SongContext = createContext()

function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // está cargando?
  const [selectedSong, setSelectedSong] = useState({}) // que cancion se selecciono?

  // simulacion a la llamada de la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }
  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
