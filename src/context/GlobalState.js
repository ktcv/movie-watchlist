import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
// empty array if nothing stored in local storage
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

  // set state to local storage every time state changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })
  }
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id })
  }
  const moveMovieToWatched = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHED', payload: movie })
  }
  const moveMovieToWatchlist = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })
  }
  const removeMovieFromWatched = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id })
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        moveMovieToWatched,
        moveMovieToWatchlist,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
