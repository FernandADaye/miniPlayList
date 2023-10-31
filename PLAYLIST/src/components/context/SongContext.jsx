import React, { useEffect, useState } from 'react'
//Importacion de la basa que datos que contiene JSON 
import canciones from '@/assets/listaCanciones.json'
import React, { createContext } from 'react'

const songContext = React.createContext(
  { count: 0, setCount: () => {} }
)
function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones 
  const [loading, setLoading] = useState(true) //está cargando?
  const [selectedSong, setSelectedSong]= useState({}) // que cancion se selecciono?

  //simulacion a la llamada de la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
}
