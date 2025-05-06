import React from 'react'
import Navbar from './component/Navbar'
import { Home } from 'lucide-react'
import Hero from './component/Hero'
import Client from './component/Clients'
import Community from './component/Community'
import Help from './component/Help'
import Security from './component/Security'
import CustomerReview from './component/CustomerReview'
import BlogSection from './component/BlogSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Help  />
      <Security />
      <CustomerReview />
      <BlogSection />
    </div>
  )
}

export default App