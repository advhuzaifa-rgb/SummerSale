'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Banners.module.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import desktop1 from './1.png'
import desktop2 from './2.png'
import desktop3 from './3.png'
import mobile1 from './1m.png'
import mobile2 from './2m.png'
import mobile3 from './3m.png'

const banners = [
  {
    desktop: desktop1,
    mobile: mobile1,
    alt: 'Statement Seating',
    href: 'https://www.alhuzaifa.com/en/shop/shop-by-room/living-room/',
  },
  {
    desktop: desktop2,
    mobile: mobile2,
    alt: 'Al Huzaifa banner',
    href: 'https://www.alhuzaifa.com/en/shop/',
  },
  {
    desktop: desktop3,
    mobile: mobile3,
    alt: 'Al Huzaifa banner',
    href: 'https://www.alhuzaifa.com/en/shop/',
  },
]

const Banners = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current])
  const [selectedIndex, setSelectedIndex] = useState(0)
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

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous banner"
        >
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4945_20455)">
              <path
                d="M24.5552 29.6026L15.6094 20.6568L24.5552 11.7109"
                stroke="#69594F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="20.5754" cy="20.5754" r="20.0754" stroke="#69594F" />
            </g>
            <defs>
              <clipPath id="clip0_4945_20455">
                <rect width="42.9401" height="42.9401" fill="white" transform="matrix(0 1 1 0 0 0)" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {banners.map((banner, index) => (
              <div className={styles.slide} key={index}>
                <a href={banner.href} className={styles.banner}>
                  <Image src={banner.desktop} alt={banner.alt} className={styles.desktopImage} />
                  <Image src={banner.mobile} alt={banner.alt} className={styles.mobileImage} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.arrowBtn}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next banner"
        >
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4945_20452)">
              <path
                d="M18.3862 29.6026L27.332 20.6568L18.3862 11.7109"
                stroke="#69594F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="20.5754"
                cy="20.5754"
                r="20.0754"
                transform="matrix(-1 0 0 1 42.9414 0)"
                stroke="#69594F"
              />
            </g>
            <defs>
              <clipPath id="clip0_4945_20452">
                <rect width="42.9401" height="42.9401" fill="white" transform="matrix(0 1 -1 0 42.9414 0)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className={styles.pills}>
        {banners.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`${styles.pill} ${index === selectedIndex ? styles.pillActive : ''}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Banners
