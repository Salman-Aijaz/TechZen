import React from 'react'
import OurServices from '../components/OurServices'
import ServiceHero from '../components/ServiceHero'



const Services = () => {
   

    return (
        <div className='dark:bg-gray-950 bg-white'>
            <ServiceHero/>
            <div className='min-h-[200px]'></div>
            <OurServices/>
        </div>
    )
}

export default Services
