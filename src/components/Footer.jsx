import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'

const Footer = ({ user }) => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <footer>
      {user ? (
        <p onClick={firebase.auth().signOut()}>Signout</p>
      ) : (
        <Link to='/signin'>Secret Signin</Link>
      )}
    </footer>
  )
}

export default Footer
