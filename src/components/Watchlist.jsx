import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Watchlist = () => {
  // access watchlist from global context
  const { watchlist } = useContext(GlobalContext)

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watchlist</h1>
        </div>
        {watchlist.length > 0 && watchlist.map((m) => m.title)}
      </div>
    </div>
  )
}

export default Watchlist
