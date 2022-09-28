import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css'
import Spinner from 'react-bootstrap/Spinner';
import Equipment from '../components/Equipment'

export default function Form({
    setForm,
    setEquipment,
    data
}) {
    const { register, watch, setValue, setFocus, handleSubmit } = useForm()
    const [loading, setLoading] = useState(true)
    const watchZip = watch("zip")
    const onSubmit = (data) => console.log(data);


    let watchCounterDevice = watch('deviceCount')
    function onBlur() {
        for (let i = 0; i < watchCounterDevice; i++) {
            (<Equipment />)
        }
    }

    useEffect(() => {
        register('zip', {
            onBlur: () => {
                setLoading(false)
                axios.get(`https://viacep.com.br/ws/${watchZip}/json/`)
                    .then((res) => {
                        setValue('state', res.data.uf)
                        setValue('city', res.data.localidade)
                        setValue('streetAddress', res.data.logradouro)
                        setValue('neighborhood', res.data.bairro)
                        setLoading(true);
                        setFocus("number");
                    })
                    .catch(err => console.log(err.message))
            }
        });
    });


    return (
        <>
            <div className={styles.formBox}>



                <div className={styles.personal}>
                    <input type="text" id="name" {...register("name", { minLength: 3 })} placeholder="Name (Ex.: Bruce Wayne)" />


                    <input type="email" id="email" {...register("email")} placeholder="Email (Ex.: bruce@wayne.com)" />


                    <input type="text" id="phone" {...register("phone")} placeholder="Phone (Ex.: 31987654321)" />
                </div>



                <div className={styles.location}>

                    <label htmlFor="zip">{loading ? "" : <Spinner animation="border" size="sm" />}</label>
                    <input type="text" id="zip" {...register("zip")} placeholder=" ZIP (Ex.: 01001000)" />

                    <input type="text" id="city" {...register("city")} placeholder="City (Ex.: Gotham City)" />


                    <input type="text" id="streetAddress" {...register("streetAddress")} placeholder="Street (Ex.: St Saint Louis)" />

                    <input type="text" id="state" {...register("state")} placeholder=" State (Ex.: CA)" />


                    <input type="number" id="number" {...register("number")} placeholder="Number (Ex.: 200)" />


                    <input type="text" id="complement" {...register("complement")} placeholder=" Complement (Ex.: District 13)" />


                    <input type="text" id="neighborhood" {...register("neighborhood")} placeholder="Neighborhood (Ex.: Silicon Valley)" />

                </div>


                <div className={styles.devices}>
                    <label htmlFor="deviceCount">Device count:</label>
                    <input type="number" id="deviceCount" {...register("deviceCount", {
                        required: true,
                        onBlur: onBlur()
                    })} placeholder="Ex.: 2" />
                </div>

                <div className={styles.devicesDetails} id="devicesDetails" >
                    <label>Type</label>
                    <select {...register('devices.0.type')}>
                        <option value="">selecione...</option>
                        <option value="notebook">Notebook</option>
                        <option value="desktop">Desktop</option>
                        <option value="netbook">Netbook</option>
                        <option value="screen">Monitor</option>
                        <option value="printer">Impressora</option>
                        <option value="scanner">Scanner</option>
                    </select>

                    <label>Condition</label>
                    <select {...register('devices.0.condition')}>
                        <option value="">selecione...</option>
                        <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                        <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                        <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                    </select>


                    <label>Type</label>
                    <select {...register('devices.1.type')}>
                        <option value="">selecione...</option>
                        <option value="notebook">Notebook</option>
                        <option value="desktop">Desktop</option>
                        <option value="netbook">Netbook</option>
                        <option value="screen">Monitor</option>
                        <option value="printer">Impressora</option>
                        <option value="scanner">Scanner</option>
                    </select>

                    <label>Condition</label>
                    <select {...register('devices.1.condition')}>
                        <option value="">selecione...</option>
                        <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                        <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                        <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                    </select>

                </div>


                {/* <button
                    onClick={() => {
                        setForm(false)
                        setEquipment(true)
                    }}
                >
                    Next
                </button> */}

                <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit
                </button>
            </div>
        </>
    )
}