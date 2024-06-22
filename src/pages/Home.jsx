import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Event from '../components/Event'
import Gallery from '../components/Gallery'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Event/>
      <Gallery/>
    </Layout>
  )
}

export default Home
