'use client'
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './logo.png'

const Navbar = () => {
  const [hide, setHide] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setHide(false)
      } else if (currentScrollY > lastScrollY) {
        setHide(true)
      } else {
        setHide(false)
      }

      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`${styles.main} ${hide ? styles.hide : ''}`}>
      <Image src={logo} alt="Al Huzaifa" className={styles.logo} />
    </div>
  )
}

export default Navbar
