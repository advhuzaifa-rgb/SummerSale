import React from 'react'
import styles from './TheWorld.module.css'

const TheWorld = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.topContainer}>
          <div className={styles.topTop}>
            <h1>The World of AlHuzaifa</h1>
            <p>
              The World of Al Huzaifa is where over 50 years of design expertise come together
              through Furniture, Design Studio, and Properties. United by craftsmanship,
              creativity, and timeless design, we create spaces that inspire the way people live.
            </p>
          </div>

          <a
            href="https://www.alhuzaifa.com/en/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span>Explore Our World</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.00168677 6.66688L0.00168683 5.17206L8.59712 5.17206L4.65755 1.06132L5.67467 -2.58748e-07L11.3477 5.91947L5.67467 11.8389L4.65755 10.7776L8.59712 6.66688L0.00168677 6.66688Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className={styles.bottomContainer}>
          <video
            className={styles.video}
            src="/about.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>
  )
}

export default TheWorld
