import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css'

export default function Equipment(props) {
    const { register } = useForm()



    return (

        <>

            <label>Tipo de equipamento</label>
            <select {...register('devices.type')}>
                <option value="">selecione...</option>
                <option value="notebook">Notebook</option>
                <option value="desktop">Desktop</option>
                <option value="netbook">Netbook</option>
                <option value="screen">Monitor</option>
                <option value="printer">Impressora</option>
                <option value="scanner">Scanner</option>
            </select>

            <label>Estado de conservação</label>
            <select {...register('devices.condition')}>
                <option value="">selecione...</option>
                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
            </select>

        </>
    )
}