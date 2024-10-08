import React from 'react'
import Contact from '../components/Contact'
import ContactHero from '../components/ContactHero'

const page = () => {
  return (
    <div className='bg-gray-50 overflow-hidden'>
      <ContactHero/>
      <Contact/>
    </div>
  )
}

export default page
