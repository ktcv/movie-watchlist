import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBBUkVn75kktrTDBZvUi9wZVCPnrf8d1DQ',
  authDomain: 'movie-watchlist-bb0c9.firebaseapp.com',
  databaseURL: 'https://movie-watchlist-bb0c9.firebaseio.com',
  projectId: 'movie-watchlist-bb0c9',
  storageBucket: 'movie-watchlist-bb0c9.appspot.com',
  messagingSenderId: '817014403780',
  appId: '1:817014403780:web:a6678bbffc8287d17b4f91',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
