import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css'
import Spinner from 'react-bootstrap/Spinner';
import Equipment from '../components/Equipment'

export default function Form({
    setForm,
    setEquipment,
    setData
}) {

    const { register, watch, setValue, setFocus, handleSubmit } = useForm()
    const [loading, setLoading] = useState(true)
    const watchZip = watch("zip")

    const onSubmit = (data) => {
        setForm(false);
        setEquipment(true);
        setData(data);
    }


    //CONSUMINDO API DE CEP
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
        })
    }, []);



    return (
        <>
            <div className={styles.formBox}>



                <div className={styles.personal}>
                    <input type="text" id="name" {...register("name", { minLength: 3 })} placeholder="Name (Ex.: Bruce Wayne)" />


                    <input type="email" id="email" {...register("email")} placeholder="Email (Ex.: bruce@wayne.com)" />


                    <input type="text" id="phone" {...register("phone")} placeholder="Phone (Ex.: 31987654321)" />
                </div>



                <div className={styles.location}>

                    <label htmlFor="zip">
                        {loading ? ""
                            : <Spinner animation="border" size="sm" />
                        }
                    </label>
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
                        required: true
                    })} placeholder="Ex.: 2" />
                </div>


                <button
                    onClick={handleSubmit(onSubmit)}
                >
                    next
                </button>

            </div>
        </>
    )
}