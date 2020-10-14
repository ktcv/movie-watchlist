import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  // access global context
  const { removeMovieFromWatchlist } = useContext(GlobalContext)

  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn'>
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button className='ctrl-btn'>
            <i
              className='fa-fw fa fa-times'
              onClick={() => removeMovieFromWatchlist(movie.id)}
            ></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
