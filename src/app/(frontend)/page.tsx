import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import './globals.css'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'
import SummerStyling from './Components/SummerStyling/SummerStyling'
import Discover from './Components/Discover/Discover'
import Partner from './Components/Partner/Partner'
import Contact from './Components/Contact/Contact'
import ShopbyMood from './Components/ShopbyMood/ShopbyMood'
import Navbar from './Components/Navbar/Navbar'
import TheWorld from './Components/TheWorld/TheWorld'
import Loved from './Components/Loved/Loved'
import Journal from './Components/Journal/Journal'
import Banners from './Components/Banners/Banners'
import SummerEdit from './Components/SummerEdit/SummerEdit'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Navbar />
      <Landing />
      <Banners />
      <ShopbyMood />
      <SummerEdit />
      <SummerStyling />
      <Contact />
      <TheWorld />
      <Loved />
      <Partner />

      <Journal />
      <Discover />

      <Footer />
    </>
  )
}
