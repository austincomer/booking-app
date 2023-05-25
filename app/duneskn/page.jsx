import Image from 'next/image'
import styles from './page.module.css'

import AppointmentForm from './components/AppointmentForm'


export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.content}>
        <header>
          <h1 className={styles.h1}>Dune - Wilmington Spray Tans & Brows</h1>
        </header>

        <AppointmentForm />

        <footer>
          <p className={styles.footerP1}>Powered by</p>
          <p className={styles.footerP2}>DayMate</p>
        </footer>
      </div>

    </main>
  )

}
