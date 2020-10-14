import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
}

// create context with initial state
export const GlobalContext = createContext(initialState)

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
