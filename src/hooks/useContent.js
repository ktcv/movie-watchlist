import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

const useContent = (target) => {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((data) => {
        const allContent = data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }))
        setContent(allContent)
      })
      .catch((error) => console.error(error.message))
  }, []) // eslint-disable-line

  return { [target]: content }
}

export default useContent
