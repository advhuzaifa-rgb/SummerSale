import React from 'react'
import styles from './SummerStyling.module.css'
import Image from 'next/image'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'

const styling = [
  { image: one, title: 'Lighting' },
  { image: two, title: 'Painting' },
  { image: three, title: 'Coffee Table' },
  { image: four, title: 'Occasional Chairs' },
]

const SummerStyling = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.textWrap}>
          <h2>Summer Styling</h2>
          <p>The finishing touches that bring every summer space to life.</p>
        </div>

        <div className={styles.cards}>
          {styling.map((item) => (
            <div className={styles.card} key={item.title}>
              <Image src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardText}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SummerStyling
