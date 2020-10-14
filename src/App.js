import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Search from './components/Search'
import './style.css'
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>

          <Route path='/watchlist'>
            <Watchlist />
          </Route>

          <Route path='/watched'>
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
