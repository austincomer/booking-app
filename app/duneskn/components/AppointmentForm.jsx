'use client'

import styles from './AppointmentForm.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useMultiStepForm } from 'app/hooks/useMultiStepForm.js'
import SelectService from './SelectService'
import SelectTime from './SelectTime'
import ConfirmAppointment from './ConfirmAppointment'
import Confirmation from './Confirmation'
import { startOfDay, format } from 'date-fns'

const INITIAL_DATA = {
    serviceSelected: '',
    date: format(new Date(), 'MMM do, yyyy'),
    apptTime: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
}


export default function AppointmentForm() {

    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields) {
        setData(prev => {
            return { ...prev,  ...fields } 
        })
    }

    const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} = useMultiStepForm([
        <SelectService 
            {...data}
            updateFields={updateFields}
        />, 
        <SelectTime 
            {...data}
            updateFields={updateFields}
        />, 
        <ConfirmAppointment
            {...data} 
            updateFields={updateFields}
        />, 
        <Confirmation 
            {...data}
            updateFields={updateFields}
        />
    ])

    function onSubmit(e) {
        e.preventDefault()
        next()
    }

    return (
        <form className={styles.appointmentForm} onSubmit={onSubmit}>

            {currentStepIndex === 0 ? <h2><span className={styles.lightenWeight}>Select a</span> Service</h2> :
            currentStepIndex === 1 ? <h2><span className={styles.lightenWeight}>Select a</span> Time</h2> :
            currentStepIndex === 2 ? <h2><span className={styles.lightenWeight}>Confirm Your</span> Appointment</h2> : <h2><span className={styles.lightenWeight}>Your Appointment is</span> Confirmed!</h2>}

            {step}

            <div className={styles.formBtnWrapper}> 
                { currentStepIndex < 3 && 
                    <button className={styles.nextBtn} type='submit'>
                        {currentStepIndex === 3 ? 'Exit' : currentStepIndex === 2 ? 'Book Now' : "Next"}
                    </button>
                }
                {!isFirstStep && !isLastStep && <button className={styles.backBtn} type='button' onClick={back}>Back</button>}
            </div>

        </form>
    )
}