'use client'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const services = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'We offer services in Frontend Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'We offer services in Backend Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 3,
        title: 'API Development',
        description: 'We offer services in API Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 4,
        title: 'MERN Stack Development',
        description: 'We offer services in MERN Stack Development.',
        aos: 'zoom-out-up'
    }
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <div className="flex justify-center items-center px-2 md:px-28 lg:px-40 my-16 cursor-default select-none">
            <div className='grid md:grid-cols-2 gap-5 justify-items-center'>
                {services.map(service => (
                    <div
                        key={service.id}
                        data-aos={service.aos}
                        className="relative w-full max-w-xs h-[250px] md:h-[275px] bg-white dark:bg-[#1D1A27] border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <div className='p-4 h-full flex flex-col justify-between'>
                            <div>
                                <span className='text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100'>{service.title}</span>
                                <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base pt-2'>{service.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 rounded-lg"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Services
