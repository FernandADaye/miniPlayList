import React, { useEffect, useState } from 'react'
import './SongList.css'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      <section className='row-container'>
        {loading

          ? <h1>Cargando</h1>
          : list.map((song) => (
            <div className='row-song' key={song.id}>
              <h2>{song.title}</h2>
              <h3>{song.artist}</h3>
            </div>
          )

          )}
      </section>

    </>
  )
}

export default SongList
