import { useForm, FormProvider, useFormContext, useWatch } from 'react-hook-form';
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import CardDevice from './CardDevice';

export default function Form2({ data, setData }) {



    return (

        <>
            {
                Array.from({ length: data.deviceCount }).map((element, index) => {
                    return (

                        <>
                            <div className={styles.devicesDetails} id="devicesDetails" >
                                <span>{index + 1}</span>
                                <CardDevice key={index} />
                            </div>
                        </>
                    )
                })
            }

        </>

    )
}