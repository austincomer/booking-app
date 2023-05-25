'use client'

import styles from './ConfirmAppointment.module.css'
import ServiceCard from 'app/duneskn/components/ServiceCard.jsx'
import services from '../services'


export default function ConfirmAppointment(props) {

  const { serviceSelected, firstName, lastName, phone, email, updateFields, date, apptTime } = props

  const selectedService = services.map((service, index) => {
    if (service.title === serviceSelected) {
      return (
        <ServiceCard 
          key={index}
          canHover={false}
          {...service}
        />
      )
    }
  })

  return (
    <div className={styles.container}>

      <div className={styles.appointmentDetailsWrapper}>
        <h3>{date} at {apptTime}</h3>
        { selectedService }
      </div>

      <div className={styles.form}>

        <div className={styles.nameFieldsWrapper}>
          <div className={styles.inputFieldWrapper}>
            <input 
              className={styles.input}
              type='text' 
              id='first-name'
              name='first-name'
              onChange={e => updateFields({ firstName: e.target.value })} 
              value={firstName}
              required
            />
            <label htmlFor='first-name' className={firstName ? styles.labelActive : styles.label}>First Name</label>
          </div>

          <div className={styles.inputFieldWrapper}>
            <input  
              className={styles.input}
              type='text' 
              id='last-name'
              name='last-name'
              onChange={e => updateFields({ lastName: e.target.value })} 
              value={lastName}
              required
            />
            <label htmlFor='last-name' className={lastName ? styles.labelActive : styles.label}>Last Name</label>
          </div>
        </div>
      

        <div className={styles.inputFieldWrapper}>
          <input 
            className={styles.input}
            type='tel'
            id='phone'
            name='phone'
            onChange={e => updateFields({ phone: e.target.value })} 
            value={phone}
            required 
          />
          <label htmlFor='phone' className={phone ? styles.labelActive : styles.label}>Phone</label>
        </div>

        <div className={styles.inputFieldWrapper}>
          <input
            className={styles.input} 
            type='email' 
            id='email'
            name='email'
            onChange={e => updateFields({ email: e.target.value })} 
            value={email}
            required 
          />
          <label htmlFor='email' className={email ? styles.labelActive : styles.label}>Email</label>
        </div>

      </div>

    </div>
  )
}