import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurpoSesection from './components/Purposesection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TestimonealSection from './components/TestimonealSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500 to-pink-500/20
      rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden' >
     <Navbar/>
     <Hero/>
     <CompanyLogo/>
     <PurpoSesection/>
     <FeaturesSection/>
     <ScheduleSection/>
     <MonitorSection/>
     <PricingSection/>
     <ServicesSection/>
     <TestimonealSection/>
     <NewsletterSection/>
     <Footer/>
     </div>
    </main>
  )
}

export default App
