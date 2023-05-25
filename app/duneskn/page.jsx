import Image from 'next/image'
import styles from './page.module.css'

import AppointmentForm from './components/AppointmentForm'


export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.content}>
        <header>
          <h1 className={styles.h1}>Dune Spray Tans & Brows</h1>
        </header>

        <AppointmentForm />

        <footer>
          <p className={styles.footerP1}>Created by</p>
          <p className={styles.footerP2}>Austin Comer</p>
        </footer>
      </div>

    </main>
  )

}
