'use client'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const services = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'We create visually appealing, user-friendly interfaces that captivate audiences and enhance user experience.',
        aos: 'zoom-out-up'
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'We build scalable, secure server-side solutions to ensure smooth functionality and efficient data management.',
        aos: 'zoom-out-up'
    },
    {
        id: 3,
        title: 'Graphic Designing',
        description: 'Blending innovation with aesthetics, we craft stunning visuals that make your brand stand out.',
        aos: 'zoom-out-up'
    },
    {
        id: 4,
        title: 'Mobile Development',
        description: 'We create feature-rich, seamless apps across platforms, delivering engaging mobile experiences.',
        aos: 'zoom-out-up'
    }
];


const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
  return (
    <div className='pb-16'>
        <h2 className="text-5xl font-bold py-6 text-center dark:text-white">Our Services</h2>
        <p className='text-gray-600 my-2 text-center'>Experience exceptional quality and creativity through our diverse range of tailored services.</p>
        <div className="flex justify-center items-center px-6 md:px-28 lg:px-40 py-4 cursor-default select-none ">
            <div className='grid md:grid-cols-2 gap-5 justify-items-center'>
                {services.map(service => (
                    <div
                        key={service.id}
                        data-aos={service.aos}
                        className="relative w-full max-w-xs h-[250px] md:h-[275px] bg-white dark:bg-card dark:hover:bg-white/20 border border-black/5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <div className='p-4 h-full flex flex-col justify-between'>
                            <div>
                                <span className='text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100'>{service.title}</span>
                                <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base pt-2'>{service.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 rounded-lg dark:hidden"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
  )
}

export default OurServices
