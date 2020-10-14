import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({ movie, showModal }) => {
  // access global context
  const {
    addMovieToWatchlist,
    moveMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext)

  // check if current movie is already in watchlist or watched
  const inWatchlist = watchlist.find((m) => m.id === movie.id)
  const inWatched = watched.find((m) => m.id === movie.id)
  // disable button if already in watchlist or watched
  const disableButton = inWatchlist || inWatched ? true : false
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
            className='btn'
            onClick={() => addMovieToWatchlist(movie)}
            disabled={disableButton}
          >
            + Watchlist
          </button>

          <button
            className='btn'
            onClick={() => moveMovieToWatched(movie)}
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
