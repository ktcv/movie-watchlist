import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FirebaseContext } from '../context/firebase'

const MovieControls = ({ movie, type, user }) => {
  const { firebase } = useContext(FirebaseContext)

  // access global context
  const {
    removeMovieFromWatchlist,
    removeMovieFromWatched,
    moveMovieToWatched,
    moveMovieToWatchlist,
  } = useContext(GlobalContext)

  const moveMovieToUserWatchlist = () => {
    firebase
      .firestore()
      .collection('userWatchlist')
      .doc(movie.id.toString())
      .set(movie)
    firebase
      .firestore()
      .collection('userWatched')
      .doc(movie.id.toString())
      .delete()
  }

  const moveMovieToUserWatched = () => {
    firebase
      .firestore()
      .collection('userWatched')
      .doc(movie.id.toString())
      .set(movie)
    firebase
      .firestore()
      .collection('userWatchlist')
      .doc(movie.id.toString())
      .delete()
  }

  const deleteUserWatchlist = () => {
    firebase
      .firestore()
      .collection('userWatchlist')
      .doc(movie.id.toString())
      .delete()
  }

  const deleteUserWatched = () => {
    firebase
      .firestore()
      .collection('userWatched')
      .doc(movie.id.toString())
      .delete()
  }

  const handleMoveToWatched = (event) => {
    event.stopPropagation()
    user ? moveMovieToUserWatched() : moveMovieToWatched(movie)
  }

  const handleRemoveFromWatchlist = (event) => {
    event.stopPropagation()
    user ? deleteUserWatchlist() : removeMovieFromWatchlist(movie.id)
  }

  const handleMoveToWatchlist = (event) => {
    event.stopPropagation()
    user ? moveMovieToUserWatchlist() : moveMovieToWatchlist(movie)
  }

  const handleRemoveFromWatched = (event) => {
    event.stopPropagation()
    user ? deleteUserWatched() : removeMovieFromWatched(movie.id)
  }

  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn'>
            <i className='fa-fw far fa-eye' onClick={handleMoveToWatched}></i>
          </button>

          <button className='ctrl-btn'>
            <i
              className='fa-fw fa fa-times'
              onClick={(event) => handleRemoveFromWatchlist(event)}
            ></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn'>
            <i
              className='fa-fw far fa-eye-slash'
              onClick={(event) => handleMoveToWatchlist(event)}
            ></i>
          </button>

          <button className='ctrl-btn'>
            <i
              className='fa-fw fa fa-times'
              onClick={handleRemoveFromWatched}
            ></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
