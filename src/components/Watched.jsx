import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
import Modal from './Modal'
import MovieDetail from './MovieDetail'
import { UserContentContext } from '../context/UserContentContext'

const Watched = ({ user }) => {
  const { userWatched } = useContext(UserContentContext)
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
            {user
              ? `${userWatched.length} ${
                  userWatched.length === 1 ? 'Movie' : 'Movies'
                }`
              : `${watched.length} ${
                  watched.length === 1 ? 'Movie' : 'Movies'
                }`}
          </span>
        </div>
        {user ? (
          // Show if logged in
          userWatched.length > 0 ? (
            <div className='movie-grid'>
              {userWatched.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  showModal={showModal}
                  type='watched'
                  user={user}
                />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>You haven't watched any movies yet!</h2>
          )
        ) : // Show if not logged in
        watched.length > 0 ? (
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
