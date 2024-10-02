import React from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import CategoryCrausal from '../CategoryCrausal/CategoryCrausal'
import LatestJob from '../LatestJob/LatestJob'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCrausal/>
      <LatestJob/>
    </div>
  )
}

export default Home
