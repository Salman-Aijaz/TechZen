import React from 'react'
import OurServices from '../components/OurServices'
import ServiceHero from '../components/ServiceHero'
import OurSkill from '../components/OurSkill'

const Services = () => {
    return (
        <div className='bg-gray-50'>
            <ServiceHero/>
            <div className='min-h-[200px]'></div>
            <OurServices/>
            {/* <div className='min-h-[200px]'></div> */}
            <OurSkill/>
        </div>
    )
}

export default Services
