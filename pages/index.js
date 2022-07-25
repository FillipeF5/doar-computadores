import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [state, setState] = useState(null)
  useEffect(() => {
    axios.get('https://doar-computador-api.herokuapp.com/')
      .then((res) => {
        setState(res.data)
      })
  }, [])
  if (!state) return null

  return (
    <>
      <div className={styles.container}>
        <h1>Doação de computadores usados</h1>
        <p>
          {state.alive ? <span className={styles.online}> API Online </span> : <span className={styles.offline}> API Offline </span>}
        </p>
      </div>
    </>
  )
}
