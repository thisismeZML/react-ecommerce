import FeaturesProduct from '@/components/FeaturesProduct'
import HeroSection from '@/components/HeroSection'
import NavProduct from '@/components/NavProduct'
import ShowSlider from '@/components/ShowSlider'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <NavProduct/>
      <FeaturesProduct/>
      <ShowSlider/>
    </>
  )
}

export default Home