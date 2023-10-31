import './SongList.css'

const SongList = () => {
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
