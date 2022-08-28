import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'


export default function Home() {
  
  return (
    <>
      <div className={styles.container}>

        <div className={styles.header}>
          <h1>Doação de computadores usados</h1>
        </div>

        <Form />
      
      </div>
    </>
  )
}