import React from 'react'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import FeaturedWorks from '../components/FeaturedWorks'
import Services from '../components/Services'
import About from '../components/About'

const HomePage = () => {
  return (
    <div>
      <About/>
      <FeaturedWorks/>
      <Testimonials/>
      <Services/>
      <ContactUs/>
    </div>
  )
}

export default HomePage
