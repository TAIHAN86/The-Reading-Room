import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Freebook from '../components/Freebook'
import Footer from "../components/Footer"
import Cards from '../components/Cards'


function Home() {
  return (
    <>
    
  <Navbar/>
  <Banner/>
  <Cards/>
  <Freebook/>
  <Footer/>
    
    </>
  )
}

export default Home