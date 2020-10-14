import React from 'react'

const MovieDetail = ({ movie }) => {
  return (
    <div className='movie-detail-container'>
      <div className='movie-detail-poster'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.poster_path} Poster`}
          />
        ) : (
          <div className='movie-detail-filler-poster'></div>
        )}
      </div>
      <div>
        <h2 className='movie-detail-title'>{movie.title}</h2>

        <h4 className='subheading'>
          {movie.release_date ? movie.release_date.substring(0, 4) : ' '}
        </h4>

        <h4 className='subheading'>
          <span>
            <i className='fas fa-star'></i>
          </span>{' '}
          {movie.vote_average}
        </h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
