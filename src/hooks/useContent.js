import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

const useContent = () => {
  const [userWatchlist, setUserWatchlist] = useState([])
  const [userWatched, setUserWatched] = useState([])

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection('userWatchlist')
      .get()
      .then((data) => {
        const allContent = data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }))

        // Only set project if changed, to prevent infinite loop
        if (
          JSON.stringify(userWatchlist.map((i) => i.id)) !==
          JSON.stringify(allContent.map((i) => i.id))
        ) {
          setUserWatchlist(allContent)
        }
      })
      .catch((error) => console.error(error.message))

    firebase
      .firestore()
      .collection('userWatched')
      .get()
      .then((data) => {
        const allContent = data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }))

        // Only set project if changed, to prevent infinite loop
        if (
          JSON.stringify(userWatched.map((i) => i.id)) !==
          JSON.stringify(allContent.map((i) => i.id))
        ) {
          setUserWatched(allContent)
        }
      })
      .catch((error) => console.error(error.message))
  }, [userWatched, userWatchlist]) // eslint-disable-line

  return {
    userWatchlist,
    userWatched,
    setUserWatchlist,
    setUserWatched,
  }
}

export default useContent
