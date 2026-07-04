'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './Partner.module.css'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import one from './1.webp'
import two from './2.webp'
import three from './3.webp'
import four from './4.webp'

const projects = [
  { image: one, name: 'San Beach' },
  { image: two, name: 'Loren' },
  { image: three, name: 'Avli by tashas' },
  { image: four, name: 'Nad al sheba villa' },
]

const Partner = () => {
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
        <div className={styles.topContainer}>
          <h2>Partner of Choice for World-Class Brands</h2>
          <p>
            A fully integrated Design Studio shaping residential and commercial spaces. From
            bespoke homes to landmark destinations, creativity meets precision. Beyond design, we
            curate immersive worlds of refined living
          </p>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {projects.map((project, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={project.image} alt={project.name} className={styles.image} />
                  </div>
                  <span>{project.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pills}>
          {projects.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.pill} ${index === selectedIndex ? styles.pillActive : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partner
