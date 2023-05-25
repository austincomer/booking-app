'use client'

import styles from './SelectTime.module.css'
import { useState } from 'react'
import Calender from '@/app/components/Calendar'
import timeSlotsData from '../timeSlotsData'

import { format, startOfToday, isSameMonth, isBefore, parse } from 'date-fns'




export default function SelectTime(props) {

  const { date, apptTime, updateFields } = props

  let today = startOfToday()
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM yyyy', new Date())

  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedTime, setSelectedTime] = useState('')

  function handleSelectedDate(day) {
    if (isSameMonth(day, firstDayCurrentMonth) && !isBefore(day, today)) {
      setSelectedDate(day)
      setSelectedTime('')
      updateFields({ date: '', apptTime: '' })

    }
  }

  function handleSelectedTime(e, time) {
    updateFields({ date: format(selectedDate, 'EEEE, MMM do, yyyy'), apptTime: e.target.value })
    setSelectedTime(time)
  }


  const times = timeSlotsData.map(time => {
    return (
      <div key={time}>
        <input 
          className={styles.timeSlotInput}
          type='radio'
          id={time}
          name='time slots'
          value={time}
          onChange={e => handleSelectedTime(e, time)}
          required
        />
        <label 
          className={selectedTime === time ? styles.timeSlotSelected : styles.timeSlot }
          htmlFor={time}
          type='button'
          value={time}
        >
        {time}</label>
      </ div>
    )
  })

  // <>
  //   <input 
  //     className={styles.serviceSelectionInput} 
  //     type="radio" 
  //     id={`service${index + 1}`} 
  //     name="services" 
  //     value={service.title} 
  //     onChange={e => updateFields({ serviceSelected: e.target.value })} 
  //     checked={service.title === serviceSelected ? 'checked' : false}
  //     required 
  //   />
  //   <label className={styles.serviceSelectionLabel} htmlFor={`service${index + 1}`} key={index}>
  //     <ServiceCard 
  //       {...services[index]}
  //       canHover={true}
  //       isSelected={serviceSelected === `${service.title}` ? true : false}
  //     />
  //   </label>
  // </>
  
  return (
    <div className={styles.container}>
        <Calender 
          selectedDate={selectedDate}
          handleSelectedDate={handleSelectedDate}
          updateFields={updateFields}
          date={date}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          firstDayCurrentMonth={firstDayCurrentMonth}
          today={today}
        />
        <div className={styles.availableTimesWrapper}>
            <h3>{format(selectedDate, 'EEEE, MMM do, yyyy')}</h3>
            <div className={styles.timeSlotsWrapper}>
              {times}
            </div>
        </div>
    </div>
  )

}