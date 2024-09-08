import React from 'react'
import Contact from '../components/Contact'
import ContactHero from '../components/ContactHero'

const page = () => {
  return (
    <div className='dark:bg-gray-950 bg-white'>
      <ContactHero/>
      <Contact/>
    </div>
  )
}

export default page
