import React from 'react'
import styles from './SummerStyling.module.css'
import Image from 'next/image'
import one from './1.webp'
import two from './2.webp'
import three from './3.webp'
import four from './4.webp'

const styling = [
  { image: one, title: 'Lighting', href: 'https://www.alhuzaifa.com/en/?q=Lighting' },
  { image: two, title: 'Painting', href: 'https://www.alhuzaifa.com/en/?q=Painting' },
  { image: three, title: 'Coffee Table', href: 'https://www.alhuzaifa.com/en/?q=Coffee+table' },
  { image: four, title: 'Occasional Chairs', href: 'https://www.alhuzaifa.com/en/?q=Chairs' },
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
            <a href={item.href} className={styles.card} key={item.title}>
              <Image src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardText}>
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SummerStyling
