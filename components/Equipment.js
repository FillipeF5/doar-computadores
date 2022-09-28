import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css'

export default function Equipment({
    setEquipment,
    setForm,
    data
}) {
    const { register, handleSubmit } = useForm()
    // const onSubmit = (data) => console.log(data);


    return (
        <div className={styles.formBox}>
            <div className={styles.devicesDetails} id="devicesDetails">
                <label>Type</label>
                <select {...register('type')}>
                    <option value="">selecione...</option>
                    <option value="notebook">Notebook</option>
                    <option value="desktop">Desktop</option>
                    <option value="netbook">Netbook</option>
                    <option value="screen">Monitor</option>
                    <option value="printer">Impressora</option>
                    <option value="scanner">Scanner</option>
                </select>

                <label>Condition</label>
                <select {...register('condition')}>
                    <option value="">selecione...</option>
                    <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                    <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                    <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                </select>
            </div>

            <button
                onClick={() => {
                    setEquipment(false)
                    setForm(true)
                }}
            >
                Back
            </button>
            <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </button>

        </div >

    )
}