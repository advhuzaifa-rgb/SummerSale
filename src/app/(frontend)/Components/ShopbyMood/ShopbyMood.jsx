import React from 'react'
import styles from './ShopbyMood.module.css'
import Image from 'next/image'
import one from './1.webp'
import two from './2.webp'
import three from './3.webp'
import four from './4.webp'

const moods = [
  {
    image: one,
    title: 'Slow Morning',
    tag: 'Living',
    href: 'https://www.alhuzaifa.com/en/shop/shop-by-room/living-room/',
  },
  {
    image: two,
    title: 'Sunset Gathering',
    tag: 'Dining',
    href: 'https://www.alhuzaifa.com/en/shop/shop-by-room/dining-room/',
  },
  {
    image: three,
    title: 'Bedroom Retreats',
    tag: 'Bedroom',
    href: 'https://www.alhuzaifa.com/en/shop/shop-by-room/bedroom/',
  },
  {
    image: four,
    title: 'Home Refresh',
    tag: 'Accessories',
    href: 'https://www.alhuzaifa.com/en/shop/accessories/',
  },
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
            <a href={mood.href} className={styles.card} key={mood.title}>
              <Image src={mood.image} alt={mood.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardText}>
                <h3>{mood.title}</h3>
                <span>{mood.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopbyMood
