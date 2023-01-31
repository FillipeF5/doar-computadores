import React, { useEffect, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import styles from '../styles/Home.module.css'
import CardDevice from '../components/CardDevice'
import Form2 from '../components/Form2'
import Form1 from '../components/Form1'

export default function Home() {

  const methods = useForm();
  const [form1, setForm1] = useState(true)
  const [form2, setForm2] = useState(false)
  const [cardDevice, setCardDevice] = useState(false)
  const [data, setData] = useState()
  const [devices, setDevices] = useState([])


  const onSubmit = data => console.log(data.devices);


  return (

    <div className={styles.container}>
      <FormProvider {...methods} >

        <div className={styles.header}>
          <h1>Doação de computadores usados</h1>
        </div>

        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.formBox}>

          {form1 && <Form1
            setForm1={setForm1}
            setForm2={setForm2}
            data={data}
            setData={setData}
            methods={methods}
          />}
          {form2 && <Form2
            setForm1={setForm1}
            setForm2={setForm2}
            data={data}
            setData={setData}
            devices={devices}
            setDevices={setDevices}
          />}
          {cardDevice && <CardDevice
            setForm1={setForm1}
            setForm2={setForm2}
            data={data}
            setData={setData}
            devices={devices}
            setDevices={setDevices}
          />}

          <input type="submit" className={styles.btn_submit} />

        </form>
      </ FormProvider>
    </div>

  )
}