import React from 'react'
import SongList from '../../components/SongList/SongList'
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
          <div>Lorequaerat omni repellendus magnam saepe maximeorequaerat omni repellendus magnam saepe maximeorequaerat omni repellendus magnam saepe maxime.</div>
        </div>
      </div>
    </>
  )
}

export default Home
