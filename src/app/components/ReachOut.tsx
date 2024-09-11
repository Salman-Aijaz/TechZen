"use client"
import AOS from 'aos'
import Link from 'next/link'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

const ReachOut = () => {
    
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);

  return (
    <div  data-aos={"flip-up"} className="flex flex-col pt-12 items-center px-4 sm:px-0">
    <h2 className="font-bold mt-4 dark:text-white lg:text-7xl text-6xl text-center">
    Ready to take <span className="text-[#268d8a]">your</span> <span className='block'>digital presence to <span className='block'>the next level?</span></span> 
        </h2>

    <p className="text-white-200 my-5 text-center">
      Reach out to us today and let&apos;s discuss how I can help you
      achieve your goals.
    </p>
    <Link href="/contact" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"    >
    Let's Work
    </Link>
  </div>
  )
}

export default ReachOut
