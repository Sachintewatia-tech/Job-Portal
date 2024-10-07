import React from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import CategoryCrausal from '../CategoryCrausal/CategoryCrausal'
import LatestJob from '../LatestJob/LatestJob'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCrausal/>
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home
