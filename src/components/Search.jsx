import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import ResultCard from './ResultCard'

const Add = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const [debouncedQuery] = useDebounce(query, 250)

  useEffect(() => {
    if (debouncedQuery === '') {
      return
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${debouncedQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results)
        } else {
          setResults([])
        }
      })
  }, [debouncedQuery])

  const onChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Jurassic Park...'
              value={query}
              onChange={onChange}
            />
            <i className='fa fa-search'></i>
          </div>
          <ul className='results'>
            {results.length > 0 &&
              results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Add
