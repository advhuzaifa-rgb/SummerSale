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

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Landing />
      <Partner />
      <SummerStyling />
      <Discover />
      <Footer />
    </>
  )
}
