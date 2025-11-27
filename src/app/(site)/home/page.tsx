'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './page.css'

import Hero from './hero'
import Services from './services'
import HomeMap from './map/map'
import HomeTeam from './team/team'
import ProjectsSection from './projects/projects'

export default function HomePage() {
  return (
    <main className="page-content">
      <Hero />
      <Services />
      <HomeMap />
      <HomeTeam />
      <ProjectsSection />{' '}
    </main>
  )
}

