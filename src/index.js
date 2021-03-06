import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { FirebaseContext } from './context/firebase'
import { firebase } from './firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
