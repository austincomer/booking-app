'use client'

import Image from 'next/image'
import styles from './ServiceCard.module.css'


export default function ServiceCard(props) {
    const {img, alt, title, price, duration, desc, canHover, isSelected } = props

  return (
    <div className={styles.cardWrapper}>
      <div className={isSelected ? `${styles.card} ${styles.serviceSelected}` : canHover ? styles.card : styles.staticCard}>

        <div className={styles.cardImgWrapper}>
          <Image
            className={styles.cardImg}
            src={img}
            fill={true}
            alt={alt}
            sizes='50vw'
          />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.contentTop}>
            <div className={styles.serviceTitleAndPrice}>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.servicePrice}>${price}</p>
            </div>
            <p className={styles.serviceDuration}>{duration}mins</p>
          </div>
          <div className={styles.contentBottom}>
            <p className={styles.serviceDesc}>{desc}</p>
          </div>
        </div>

      </div>
    </div>
  )

}