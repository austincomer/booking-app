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
          key={`${time} input`}
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
          key={`${time} label`}
        >
        {time}</label>
      </ div>
    )
  })
  
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