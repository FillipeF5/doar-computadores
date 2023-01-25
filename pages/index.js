import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Equipment from '../components/Equipment'


export default function Home() {

  const [form, setForm] = useState(true)
  const [equipment, setEquipment] = useState(false)
  const [ data, setData ] = useState()

  return (
    <>
      <div className={styles.container}>

        <div className={styles.header}>
          <h1>Doação de computadores usados</h1>
        </div>



        {form && <Form
          setForm={setForm}
          setEquipment={setEquipment}
          data={data}
          setData={setData}
        />}
        {equipment && <Equipment
          setForm={setForm}
          setEquipment={setEquipment}
          data={data}
        />}




      </div>
    </>
  )
}