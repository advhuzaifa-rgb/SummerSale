import React from 'react'
import styles from './ShopbyMood.module.css'
import Image from 'next/image'
import one from './1.webp'
import two from './2.webp'
import three from './3.webp'
import four from './4.webp'

const moods = [
  { image: one, title: 'Slow Morning', tag: 'Living' },
  { image: two, title: 'Sunset Gathering', tag: 'Dining' },
  { image: three, title: 'Bedroom Retreats', tag: 'Bedroom' },
  { image: four, title: 'Home Refresh', tag: 'Accessories' },
]

const ShopbyMood = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.textWrap}>
          <h2>Shop by Mood</h2>
          <p>Discover furniture curated for every corner of your home.</p>
        </div>

        <div className={styles.cards}>
          {moods.map((mood) => (
            <div className={styles.card} key={mood.title}>
              <Image src={mood.image} alt={mood.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardText}>
                <h3>{mood.title}</h3>
                <span>{mood.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopbyMood
