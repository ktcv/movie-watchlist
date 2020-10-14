export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      }
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      }
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watchlist.filter((movie) => movie.id !== action.payload),
      }
    case 'MOVE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      }
    case 'MOVE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
