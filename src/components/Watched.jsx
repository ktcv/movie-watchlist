import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
import Modal from './Modal'
import MovieDetail from './MovieDetail'

const Watched = () => {
  // access watched from global context
  const { watched } = useContext(GlobalContext)

  // modal state
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMovie, setModalMovie] = useState({})

  // functions to toggle modal visibility
  const showModal = (movie) => {
    setModalMovie(movie)
    setModalVisible(true)
  }

  const hideModal = () => {
    if (modalVisible) {
      setModalMovie({})
      setModalVisible(false)
    }
  }

  return (
    <div className='movie-page' onClick={hideModal}>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Watched Movies</h1>

          <span className='count-pill'>
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className='movie-grid'>
            {watched.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                showModal={showModal}
                type='watched'
              />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>You haven't watched any movies yet!</h2>
        )}
      </div>
      <Modal show={modalVisible}>
        <MovieDetail movie={modalMovie} />
      </Modal>
    </div>
  )
}

export default Watched
