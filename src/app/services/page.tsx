'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const services = [
    {
        id: 1,
        title: 'Frontend Development',
        description: 'We Give A services of Frontend Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'We Give A services of Backend Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 3,
        title: 'API Development',
        description: 'We Give A services of API Development.',
        aos: 'zoom-out-up'
    },
    {
        id: 4,
        title: 'MERN Stack Development',
        description: 'We Give A services of MERN Stack Development.',
        aos: 'zoom-out-up'
    }
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="grid px-2 md:px-28 lg:px-40 relative gap-10 my-16 cursor-default select-none">
            <div className='sticky'>
                {/*<Link href={'/signin'}>*/}
                {/* <Button/> */}
                {/*</Link>*/}
            </div>
            <div className='grid md:grid-cols-2 gap-5 relative'>
                <div data-aos="flip-up" className='bg-gr-primary absolute top-[35%] left-28 rounded-[100%] w-64 h-64 filter dark:blur-[70px] blur-[100px]'></div>
                {services.map(service => (
                    <div key={service.id} data-aos={service.aos} className="dark:bg-[#1D1A27] shadow-md dark:shadow-card z-10 rounded-[18px] grid">
                        <div className='md:p-4 p-2 overflow-hidden'>
                            {/* <p className='bg-[#5E5B71] rounded-[18px] mb-5 flex justify-center items-center font-bold text-3xl w-14 h-14'>{service.id}</p> */}
                            <span className='text-lg md:text-xl font-semibold'>{service.title}</span>
                            <p className='text-gray-500 text-sm md:text-base pt-2'>{service.description}</p>
                            {/* <button className='md:mt-7 mt-3 text-primary'>View Courses</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
