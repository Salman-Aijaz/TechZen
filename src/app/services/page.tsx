import React from 'react'
import OurServices from '../components/OurServices'
import ServiceHero from '../components/ServiceHero'



const Services = () => {
   

    return (
        <div className='bg-gray-50'>
            <ServiceHero/>
            <div className='min-h-[200px]'></div>
            <OurServices/>
        </div>
    )
}

export default Services
