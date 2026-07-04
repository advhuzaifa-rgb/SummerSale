'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './Loved.module.css'
import useEmblaCarousel from 'embla-carousel-react'

const reviews = [
  {
    text: 'Very impressed, excellent Quality, beautiful modern designs, u can customize or ready furnitures, very polite professional customer service.',
    name: 'G F',
    tag: 'Google Review',
  },
  {
    text: 'I am so grateful to have chosen Al Huzaifa for designing my villa. They were very professional, creative and understood exactly what i wanted to capture. Thank you Team and Reem!',
    name: 'Asma khoori',
    tag: 'Google Review',
  },
  {
    text: `Looking great as in the showroom.
Thank you to the professional people, starting with Karim at the showroom to the delivery team...
I highly recommend \u{1F44D}`,
    name: 'David Amaneddine',
    tag: 'Google Review',
  },
  {
    text: `Demyana was very helpful in guiding us of what we want -spent quality time in guiding us and giving us choices
She really was a great help thank u`,
    name: 'nabila harazeen',
    tag: 'Google Review',
  },
  {
    text: 'I had an amazing experience with Al Huzaifa Furniture - Abu Dhabi. A special thank you to the talented design team, who transformed our entrance and hall into a stunning 5-star lobby. Their creativity, attention to detail, and patience were truly impressive. Highly recommended!',
    name: 'VIP',
    tag: 'Google Review',
  },
  {
    text: 'I recently purchased a modern sofa from Abu Dhabi and I could not be happier. The sales associate, Amir, was incredibly helpful and patient throughout. The price was very reasonable for the exceptional quality. Thank you Al Huzaifa.',
    name: 'aysha alneyadi',
    tag: 'Google Review',
  },
  {
    text: 'I love the products by Al Huzaifa, interesting design and good quality. I received excellent service from Mohamed Khaled/Abu Dhabi store with design service included, it really helped me choose the right furniture.',
    name: 'Lena Havia',
    tag: 'Google Review',
  },
  {
    text: 'Alhuzaifa is a brand that stands out in the furniture market by consistently delivering high quality pieces that compete with big brands, especially coffee tables. Excellent craftsmanship and durability at a decent price.',
    name: 'MMM',
    tag: 'Google Review',
  },
  {
    text: 'One of the best furniture showrooms. Al Huzaifa Fit-out for interior design takes the space into another dimension - always proud to collaborate with their professional team. Highly recommended for high quality furniture and perfect service.',
    name: 'Amena Remeithi',
    tag: 'Google Review',
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
          <h2>What Our Customers Say</h2>
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
