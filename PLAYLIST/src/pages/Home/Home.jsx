import React from 'react'
import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails/SongDetails'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home-conteiner'>
        <div className='izquierdo'>
          <h2>Izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>Derecho</h2>
          <SongDetails />
        </div>
      </div>
    </>
  )
}

export default Home
