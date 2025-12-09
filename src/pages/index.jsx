import Hero from '@/components/home/Hero'
import OurProcess from '@/components/home/OurProcess'
import ServiceSection from '@/components/home/ServiceSection'
import WorkSection from '@/components/home/WorkSection'
import React from 'react'

const Home = () => {

  return (
    <>
      <Hero />
      <WorkSection/>
      <ServiceSection/>
      <OurProcess/>
    </>
  )
}

export default Home


