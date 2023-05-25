'use client'

import styles from 'app/components/Calendar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { add, sub, endOfMonth, endOfWeek, format, isBefore, isEqual, isSameMonth, startOfToday, getDay, startOfWeek, isMatch } from 'date-fns'
import { eachDayOfInterval, isToday, parse } from 'date-fns/esm'
import { useState } from 'react'


export default function Calender(props) {

    const { selectedDate,  handleSelectedDate, date, updateFields, today, currentMonth, setCurrentMonth, firstDayCurrentMonth } = props

    let daysOfTheMonth = eachDayOfInterval({ 
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)) 
    })

    function nextMonth() {
       let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
       setCurrentMonth(format(firstDayNextMonth, 'MMM yyyy'))
    }

    function prevMonth() {
        if (!isSameMonth(firstDayCurrentMonth, today)) {
            let firstDayPrevMonth = sub(firstDayCurrentMonth, { months: 1 })
            setCurrentMonth(format(firstDayPrevMonth, 'MMM yyyy'))
        } 
     }
     
    const days = daysOfTheMonth.map((day, index) => {
        return (
            <li 
                className={
                    index === 0 && getDay(day) === 0 ? styles.firstDaySun :
                    index === 0 && getDay(day) === 1 ? styles.firstDayMon :
                    index === 0 && getDay(day) === 2 ? styles.firstDayTue :
                    index === 0 && getDay(day) === 3 ? styles.firstDayWed :
                    index === 0 && getDay(day) === 4 ? styles.firstDayThu :
                    index === 0 && getDay(day) === 5 ? styles.firstDayFri :
                    index === 0 && getDay(day) === 6 ? styles.firstDaySat : styles.dayOfMonthWrapper 
                } 
                key={day.toString()}
            >
                <button 
                    className={
                        // isMatch(day, {date} ) ? styles.dateSelected :
                        isEqual(day, selectedDate) && isToday(day) ? `${styles.todaySelected}` :
                        isEqual(day, selectedDate) ? `${styles.dateSelected}` : 
                        isToday(day) ? `${styles.todaysDate}` :
                        !isSameMonth(day, firstDayCurrentMonth) ? `${styles.notSameMonth}` : 
                        isBefore(day, today) ? `${styles.notSameMonth}` : `${styles.dayOfMonth}`
                    }
                    type='button'
                    onClick={() => handleSelectedDate(day)}
                >
                    <time className={styles.dayOfMonthTime} dateTime={format(day, 'MM-dd-yyyy')}>{format(day, 'd')}</time>
                </button>
            </li>
        )
    })

    return (
        <main className={styles.main}>
            <div className={styles.calendarContainer}>

                <header className={styles.calendarHeader}>
                    <div className={styles.calendarNav}>
                        <button 
                            id={styles.prevMonth} 
                            className={isSameMonth(firstDayCurrentMonth, today) ? styles.changeMonthsIconDisabled : styles.changeMonthsIcon} 
                            type='button'
                            onClick={prevMonth}
                            disabled={isSameMonth(firstDayCurrentMonth, today) ? true : false}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <p className={styles. calendarCurrentDate}>{currentMonth}</p>
                        <button 
                            id={styles.nextMonth} 
                            className={styles.changeMonthsIcon} 
                            type='button'
                            onClick={nextMonth}>
                                <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </header>

                <div className={styles.calendar}>
                    <ul className={styles.weeks}>
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className={styles.days}>
                        { days }
                    </ul>
                </div>

            </div>
        </main>
    )

}