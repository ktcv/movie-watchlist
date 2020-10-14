import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({ movie }) => {
  // access global context
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)

  // check if current movie is already in watchlist
  let storedMovie = watchlist.find((m) => m.id === movie.id)
  // disable add button if already in watchlist
  const watchlistDisabled = storedMovie ? true : false

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
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
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : ' '}
          </h4>
        </div>

        <div className='controls'>
          <button
            className='btn'
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard