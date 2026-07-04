import React from 'react'
import styles from './Discover.module.css'
import Image from 'next/image'
import desktop from './1d.png'
import mobile from './1m.png'

const points = [
  { number: '01', text: 'Listening Lounge' },
  { number: '02', text: 'Signature Matcha Bar' },
  { number: '03', text: 'Pilates Sessions' },
  { number: '04', text: 'Curated Styling Moments' },
  { number: '05', text: 'Music, Design & Relaxation' },
]

const Discover = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftTop}>
            <h2>Discover our Summer Lounging In-store Experience.</h2>
            <p>Designed to slow you down and inspire. A destination where interiors meet lifestyle</p>
          </div>

          <div className={styles.leftBottom}>
            {points.map((point) => (
              <div className={styles.point} key={point.number}>
                <span className={styles.number}>{point.number}</span>
                <span className={styles.text}>{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <Image src={desktop} alt="Al Huzaifa in-store experience" className={styles.desktopImage} />
          <Image src={mobile} alt="Al Huzaifa in-store experience" className={styles.mobileImage} />
        </div>
      </div>
    </div>
  )
}

export default Discover
