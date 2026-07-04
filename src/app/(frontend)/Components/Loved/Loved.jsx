'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './Loved.module.css'
import useEmblaCarousel from 'embla-carousel-react'

const reviews = [
  {
    text: 'Very impressed, excellent Quality, beautiful modern designs, u can customize or ready furnitures, very polite professional customer service..',
    name: 'G F',
    tag: 'Home - Owner',
  },
  {
    text: 'I am so grateful to have chosen Al Huzaifa for designing my villa. They were very professional, creative and understood every part of what i wanted to capture and translated it in such a beautiful way.',
    name: 'Asma khoori',
    tag: 'Home - Owner',
  },
  {
    text: 'Looking great as in the showroom. Thank you to the professional team, from the showroom to the delivery. I highly recommend 👍',
    name: 'David Amaneddine',
    tag: 'Home - Owner',
  },
  {
    text: 'The quality of the furniture exceeded our expectations. The team guided us through every choice and the delivery was right on schedule.',
    name: 'Fatima Rashid',
    tag: 'Home - Owner',
  },
  {
    text: 'From the showroom experience to the final installation, everything was seamless. Our living room finally feels complete.',
    name: 'Omar Al Sayed',
    tag: 'Home - Owner',
  },
  {
    text: 'Beautiful designs and even better service. They understood our style instantly and helped us furnish our new villa.',
    name: 'Layla Haddad',
    tag: 'Home - Owner',
  },
  {
    text: 'Professional from start to finish. The custom pieces we ordered fit perfectly and the craftsmanship is outstanding.',
    name: 'Khalid Mansoor',
    tag: 'Home - Owner',
  },
  {
    text: 'A wonderful experience overall. The staff were patient with all our questions and the furniture looks stunning in our home.',
    name: 'Noura Saeed',
    tag: 'Home - Owner',
  },
]

const Loved = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [progress, setProgress] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const onScroll = useCallback((api) => {
    setProgress(Math.min(1, Math.max(0, api.scrollProgress())))
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect(emblaApi)
    onScroll(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onSelect, onScroll])

  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.headerRow}>
          <h2>Loved by Homeowners Across the UAE</h2>
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous review"
            >
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4945_20480)">
                  <path
                    d="M18.875 22.75L12 15.875L18.875 9"
                    stroke="#69594F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="15.8125" cy="15.8125" r="15.3125" stroke="#69594F" />
                </g>
                <defs>
                  <clipPath id="clip0_4945_20480">
                    <rect width="33" height="33" fill="white" transform="matrix(0 1 1 0 0 0)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next review"
            >
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4945_20483)">
                  <path
                    d="M14.125 22.75L21 15.875L14.125 9"
                    stroke="#69594F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="15.8125"
                    cy="15.8125"
                    r="15.3125"
                    transform="matrix(-1 0 0 1 33 0)"
                    stroke="#69594F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4945_20483">
                    <rect width="33" height="33" fill="white" transform="matrix(0 1 -1 0 33 0)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {reviews.map((review, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.card}>
                  <p>{review.text}</p>
                  <div className={styles.nameBlock}>
                    <h3>{review.name}</h3>
                    <span>{review.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progress * 100}%` }} />
        </div>

        <div className={styles.pills}>
          {scrollSnaps.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.pill} ${index === selectedIndex ? styles.pillActive : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loved
