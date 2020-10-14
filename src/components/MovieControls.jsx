import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  // access global context
  const {
    removeMovieFromWatchlist,
    removeMovieFromWatched,
    moveMovieToWatched,
    moveMovieToWatchlist,
  } = useContext(GlobalContext)

  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn'>
            <i
              className='fa-fw far fa-eye'
              onClick={() => moveMovieToWatched(movie)}
            ></i>
          </button>

          <button className='ctrl-btn'>
            <i
              className='fa-fw fa fa-times'
              onClick={() => removeMovieFromWatchlist(movie.id)}
            ></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn'>
            <i
              className='fa-fw far fa-eye-slash'
              onClick={() => moveMovieToWatchlist(movie)}
            ></i>
          </button>

          <button className='ctrl-btn'>
            <i
              className='fa-fw fa fa-times'
              onClick={() => removeMovieFromWatched(movie.id)}
            ></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
