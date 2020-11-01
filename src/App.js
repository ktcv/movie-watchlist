import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Signin from './components/Signin'
import Search from './components/Search'
import Footer from './components/Footer'
import './style.css'
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from './context/GlobalState'
import useAuthListener from './hooks/authListener'
import useContent from './hooks/useContent'
import { UserContentContext } from './context/UserContentContext'

const App = () => {
  const { user } = useAuthListener()

  const {
    userWatchlist,
    userWatched,
    setUserWatchlist,
    setUserWatched,
  } = useContent()

  return (
    <GlobalProvider>
      <UserContentContext.Provider
        value={{ userWatchlist, userWatched, setUserWatchlist, setUserWatched }}
      >
        <Router basename='/' exact>
          <Header user={user} />

          <Switch>
            <Route exact path={['/', '/search']}>
              <Search user={user} />
            </Route>

            <Route path='/watchlist' exact>
              <Watchlist user={user} />
            </Route>

            <Route path='/watched' exact>
              <Watched user={user} />
            </Route>

            <Route path='/signin' exact>
              <Signin />
            </Route>
          </Switch>

          <Footer user={user} />
        </Router>
      </UserContentContext.Provider>
    </GlobalProvider>
  )
}

export default App
