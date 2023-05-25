'use client'

import styles from './SelectService.module.css'
import ServiceCard from 'app/duneskn/components/ServiceCard.jsx'
import services from '../services'


export default function SelectService(props) {

  const { serviceSelected, updateFields } = props

  const serviceCards = services.map((service, index) => {
    return (
      <div key={index}>
        <input 
          className={styles.serviceSelectionInput} 
          type="radio" 
          id={`service${index + 1}`} 
          name="services" 
          value={service.title} 
          onChange={e => updateFields({ serviceSelected: e.target.value })} 
          checked={service.title === serviceSelected ? 'checked' : false}
          required 
        />
        <label className={styles.serviceSelectionLabel} htmlFor={`service${index + 1}`}>
          <ServiceCard 
            {...services[index]}
            canHover={true}
            isSelected={serviceSelected === `${service.title}` ? true : false}
          />
        </label>
      </div>
    )
  })
  
  return (
    <div className={styles.container}>
      {serviceCards}
    </div>
  )

}