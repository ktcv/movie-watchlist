import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FirebaseContext } from '../context/firebase'
import useContent from '../hooks/useContent'

const ResultCard = ({ movie, showModal, user }) => {
  const { firebase } = useContext(FirebaseContext)
  const { userWatchlist } = useContent('userWatchlist')
  const { userWatched } = useContent('userWatched')

  // access global context
  const {
    moveMovieToWatchlist,
    moveMovieToWatched,
    watchlist,
    watched,
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

  const handleWatchlist = (movie) => {
    user ? moveMovieToUserWatchlist(movie) : moveMovieToWatchlist(movie)
  }

  const handleWatched = (movie) => {
    user ? moveMovieToUserWatched(movie) : moveMovieToWatched(movie)
  }

  // check if current movie is already in watchlist or watched
  const inWatchlist = user
    ? userWatchlist.find((m) => m.id === movie.id)
    : watchlist.find((m) => m.id === movie.id)
  const inWatched = user
    ? userWatched.find((m) => m.id === movie.id)
    : watched.find((m) => m.id === movie.id)
  // disable button if already in watchlist or watched
  const disableButton = inWatchlist ? true : false
  // disable button if already in watched
  const disableWatched = inWatched ? true : false

  return (
    <div className='result-card'>
      <div className='poster-wrapper' onClick={() => showModal(movie)}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.poster_path} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='subheading'>
            {movie.release_date ? movie.release_date.substring(0, 4) : ' '}
          </h4>
          <h4 className='subheading'>
            <span>
              <i className='fas fa-star'></i>
            </span>{' '}
            {movie.vote_average}
          </h4>
        </div>

        <div className='controls'>
          <button
            className='button-text'
            onClick={() => handleWatchlist(movie)}
            disabled={disableButton}
          >
            + Watchlist
          </button>

          <button
            className='button-text'
            onClick={() => handleWatched(movie)}
            disabled={disableWatched}
          >
            + Watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
