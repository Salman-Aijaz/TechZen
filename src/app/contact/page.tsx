import React from 'react'
import Contact from '../components/Contact'
import ContactHero from '../components/ContactHero'
import ContactClosing from '../components/ContactClosing'

const page = () => {
  return (
    <div className='dark:bg-gray-950 bg-white'>
      <ContactHero/>
      <Contact/>
      <ContactClosing/>
    </div>
  )
}

export default page
