'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './Journal.module.css'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { articles } from './data'

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.00168677 6.66688L0.00168683 5.17206L8.59712 5.17206L4.65755 1.06132L5.67467 -2.58748e-07L11.3477 5.91947L5.67467 11.8389L4.65755 10.7776L8.59712 6.66688L0.00168677 6.66688Z"
      fill="white"
    />
  </svg>
)

const Journal = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <h2>Summer Styling Journal</h2>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {articles.map((article, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={article.image} alt={article.title} className={styles.image} />
                  </div>
                  <p>{article.title}</p>
                  <Link href={`/journal/${article.slug}`} className={styles.cta}>
                    <span>Read the article</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pills}>
          {articles.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.pill} ${index === selectedIndex ? styles.pillActive : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
