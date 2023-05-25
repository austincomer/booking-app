'use client'

import styles from './Confirmation.module.css'
import ServiceCard from 'app/duneskn/components/ServiceCard.jsx'
import services from '../services'


export default function Confirmation(props) {

    const { serviceSelected, firstName, lastName, phone, email, date, apptTime } = props

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

        <div className={styles.confirmationInfoContainer}>

            <div className={styles.infoAndDetailsWrapper}>
                <div className={styles.infoWrapper}>
                    <h4>INFO</h4>
                    <p>{firstName} {lastName}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                <div className={styles.contactWrapper}>
                    <h4>CONTACT</h4>
                    <p>Anna Comer</p>
                    <p>helloduneskn@gmail.com</p>
                    <p>816-830-8874</p>
                </div>
            </div>

            <div className={styles.confirmationMessageWrapper}>
                <p>You&apos;re booked! I&apos;ll follow up with you via email or text and let you know all the details. If you have any questions, you can reach out to be at helloduneskn@gmail.com or on Insta @duneskn</p>
                <p>Anna Comer</p>
            </div>

        </div>

    </div>
  )
}