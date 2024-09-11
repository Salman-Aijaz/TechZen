"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import serviceBg from "../assets/services-bg.jpg"
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css';

const ServiceHero = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

  return (
    <div className='relative w-full h-[520px]'>
      {/* Background Image */}
      <Image 
        src={serviceBg} 
        alt='Service Background' 
        layout='fill' 
        objectFit='cover' 
        className='absolute z-0'
      />

      <div data-aos={"fade-up-right"} className='relative z-10 flex flex-col items-start justify-center h-full text-white bg-opacity-50 px-10'>
      <h2 className="font-bold my-4 lg:text-7xl text-6xl">
      Elevating Your 
       <span className="block text-[#268d8a]">Experience</span> with Unmatched 
       <span className='block text-orange-700'>Excellence</span>
        </h2>        
        <p className='text-lg mb-4'>
        Unlock your business potential with our expert digital solutions.</p>
        <Link
          href="/services"
          className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
        >
          View Services
        </Link>
</div>
    </div>
  )
}

export default ServiceHero
