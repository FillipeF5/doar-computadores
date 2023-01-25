import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Equipment({
    data
}) {
    const { register, handleSubmit } = useForm()
    const [devices, setDevices] = useState()

   
    const onSubmit = (devices) => {
        // [data].push.apply(data, [devices]);
        [devices].map((device) => console.log(device))
        console.log(devices)
    };

    return (

        <div className={styles.formBox}>


            {
                Array.from({ length: data.deviceCount }).map((element, index) => (
                        <>
                        <div className={styles.devicesDetails} id="devicesDetails" key={index}>
                            <span>{index +1}</span>
                            <label>Type</label>
                            <select {...register(`devices.type`)}>
                                <option value="">selecione...</option>
                                <option value="notebook">Notebook</option>
                                <option value="desktop">Desktop</option>
                                <option value="netbook">Netbook</option>
                                <option value="screen">Monitor</option>
                                <option value="printer">Impressora</option>
                                <option value="scanner">Scanner</option>
                            </select>

                            <label>Condition</label>
                            <select {...register(`devices.condition`)}>
                                <option value="">selecione...</option>
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                    </>
                    )
                )
            }



        <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
        >
            Submit
        </button>
        </div >

    )
}