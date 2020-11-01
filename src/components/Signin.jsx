import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'

const Signin = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || emailAddress === ''

  const handleSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push('/watchlist')
      })
      .catch((error) => {
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSignin}>
        <input
          type='text'
          placeholder='Email'
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type='submit' disabled={isInvalid}>
          Sign in
        </button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Signin
