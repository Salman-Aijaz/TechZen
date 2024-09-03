'use client'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const services = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'Transform your vision into a stunning reality with our Frontend Development services. We craft visually appealing and user-friendly interfaces that captivate your audience and enhance user experience.',
        aos: 'zoom-out-up'
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Power your applications with our robust Backend Development services. We build scalable and secure server-side solutions that ensure smooth functionality and efficient data management for your business.',
        aos: 'zoom-out-up'
    },
    {
        id: 3,
        title: 'API Development',
        description: 'Connect and integrate seamlessly with our API Development services. We design and develop reliable and flexible APIs that enable efficient communication between your applications and external systems.',
        aos: 'zoom-out-up'
    },
    {
        id: 4,
        title: 'MERN Stack Development',
        description: 'Leverage the full potential of the MERN stack with our comprehensive development services. From building dynamic web applications to creating sophisticated user interfaces, we utilize MongoDB, Express.js, React.js, and Node.js to deliver powerful and scalable solutions.',
        aos: 'zoom-out-up'
    }
];


const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
        <h2 className="text-4xl font-bold text-center dark:text-white">Our Services</h2>
        <div className="flex justify-center items-center px-6 md:px-28 lg:px-40 my-16 cursor-default select-none ">
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
        </>
    )
}

export default Services
