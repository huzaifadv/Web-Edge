import { useState } from 'react'
import './App.css'
import { HeroHighlightDemo } from './components/ui/HeroHighlightDemo'
import NavbarTop from './components/ui/NavbarTop'
import { TextHoverEffectDemo } from './components/ui/TextHoverEffectDemo'
import { ThreeDCardDemo } from './components/ui/ThreeDCardDemo'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { GridBackgroundDemo } from './components/ui/GridBackgroundDemo'
import { HeroSectionOne } from './components/ui/HeroSectionOne'
import { TimelineDemo } from './components/ui/TimelineDemo'
import CursorBox from './components/ui/CursorBox'
import { AnimatedPinDemo } from './components/ui/AnimatedPinDemo'
import { MacbookScrollDemo } from './components/ui/MacbookScrollDemo'
import { GoogleGeminiEffectDemo } from './components/ui/GoogleGeminiEffect'
import Footer from './components/ui/Footer'


function App() {

  return (
    <>
      <CursorBox />
      <NavbarTop />
      <HeroHighlightDemo />
      <TextHoverEffectDemo />
      <ThreeDCardDemo />
      <MacbookScrollDemo/>
      <HeroParallaxDemo />
      <HeroSectionOne />
      <GridBackgroundDemo />
      <TimelineDemo />
      <AnimatedPinDemo/>
      <GoogleGeminiEffectDemo/>
      <Footer/>
    </>
  )
}

export default App
