import React from 'react'
import SongList from '@/components/SongList/SongList'
import SongDetails from '@/components/SongDetails/SongDetails'
import { SongProvider } from '@/components/context/SongContext'
import './Home.css'

const Home = () => {
  return (
    <>
      <SongProvider>
        <div className='home-conteiner'>
          <div className='izquierdo'>
            <h2>Izquierdo</h2>
            <SongList />
          </div>
          <div className='derecho'>
            <h2>Derecho</h2>
            <br />
            <SongDetails />
          </div>
        </div>
      </SongProvider>
    </>
  )
}

export default Home
