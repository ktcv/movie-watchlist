import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>S & K</Link>
          </div>

          <ul className='nav-links'>
            <li>
              <Link to='/watchlist'>Watchlist</Link>
            </li>

            <li>
              <Link to='/watched'>Watched</Link>
            </li>

            <li>
              <Link className='btn' to='/search'>
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
