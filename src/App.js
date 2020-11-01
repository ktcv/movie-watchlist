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

const App = () => {
  const { user } = useAuthListener()

  return (
    <GlobalProvider>
      <Router basename='/' exact>
        <Header />

        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>

          <Route path='/watchlist' exact>
            <Watchlist />
          </Route>

          <Route path='/watched' exact>
            <Watched />
          </Route>

          <Route path='/signin' exact>
            <Signin />
          </Route>
        </Switch>

        <Footer user={user} />
      </Router>
    </GlobalProvider>
  )
}

export default App
