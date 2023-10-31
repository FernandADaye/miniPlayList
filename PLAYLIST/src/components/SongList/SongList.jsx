import './SongList.css'
import { useSongContext } from '../hooks/useSongContext'

const SongList = () => {
  const { list, loading } = useSongContext()
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
