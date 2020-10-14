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

  const handleMoveToWatched = (event) => {
    event.stopPropagation()
    moveMovieToWatched(movie)
  }

  const handleRemoveFromWatchlist = (event) => {
    event.stopPropagation()
    removeMovieFromWatchlist(movie.id)
  }

  const handleMoveToWatchlist = (event) => {
    event.stopPropagation()
    moveMovieToWatchlist(movie)
  }

  const handleRemoveFromWatched = (event) => {
    event.stopPropagation()
    removeMovieFromWatched(movie.id)
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
              onClick={handleRemoveFromWatchlist}
            ></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn'>
            <i
              className='fa-fw far fa-eye-slash'
              onClick={handleMoveToWatchlist}
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
