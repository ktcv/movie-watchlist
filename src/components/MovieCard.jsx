import React from 'react'
import MovieControls from './MovieControls'

const MovieCard = ({ movie, showModal, type, user }) => {
  return (
    <div className='movie-card' onClick={() => showModal(movie)}>
      <div className='overlay'></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.poster_path} Poster`}
        />
      ) : (
        <div className='overlay'>
          <div className='filler-poster-large'></div>
          <h3 className='filler-title'>{movie.title}</h3>
        </div>
      )}

      <MovieControls type={type} movie={movie} user={user} />
    </div>
  )
}

export default MovieCard
