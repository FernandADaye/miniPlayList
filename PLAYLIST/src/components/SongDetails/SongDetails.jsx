import React from 'react'
import './SongDetails.css'
import { useSongContext } from '../hooks/useSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()

  return (
    <>
      {
      selectedSong.title
        ? (
          <div className='songCon'>
            <h2>{selectedSong.title}</h2>
            <img className='songImg' src={selectedSong.img_url} alt='imagen de la cancion' />
            <h2>{selectedSong.artist}</h2>
          </div>
          )
        : (
          <p>error</p>
          )
    }
    </>
  )
}

export default SongDetails
