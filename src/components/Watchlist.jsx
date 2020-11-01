import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
import Modal from './Modal'
import MovieDetail from './MovieDetail'
import { UserContentContext } from '../context/UserContentContext'

const Watchlist = ({ user }) => {
  const { userWatchlist } = useContext(UserContentContext)
  // access watchlist from global context
  let { watchlist } = useContext(GlobalContext)

  watchlist = watchlist.sort((a, b) => (a.title > b.title ? 1 : -1))

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
          <h1 className='heading'>Watchlist</h1>

          <span className='count-pill'>
            {user
              ? `${userWatchlist.length} ${
                  userWatchlist.length === 1 ? 'Movie' : 'Movies'
                }`
              : `${watchlist.length} ${
                  watchlist.length === 1 ? 'Movie' : 'Movies'
                }`}
          </span>
        </div>
        {user ? (
          // Show if logged in
          userWatchlist.length > 0 ? (
            <div className='movie-grid'>
              {userWatchlist.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  showModal={showModal}
                  type='watchlist'
                  user={user}
                />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>No movies in your list, add some!</h2>
          )
        ) : // Show if not logged in
        watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                showModal={showModal}
                type='watchlist'
              />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies in your list, add some!</h2>
        )}
      </div>
      <Modal show={modalVisible}>
        <MovieDetail movie={modalMovie} />
      </Modal>
    </div>
  )
}

export default Watchlist
