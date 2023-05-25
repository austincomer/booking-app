import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Link className={styles.navLink} href='/duneskn'>Book Now!</Link>
    </main>
  )
  
}
