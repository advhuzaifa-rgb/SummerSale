'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Landing.module.css'


const Landing = () => {



  return (
    <div className={styles.Main}>

  <video
  className={styles.videoBg}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"   
  poster="/homethumb.webp"
>
        <source src="/home.mp4" type="video/mp4" />
      </video>

      <div className={styles.MainContainer}>
        {/* <h3 ref={textRef}>{t.landing.heading}</h3> */}
      </div>
    </div>
  )
}

export default Landing