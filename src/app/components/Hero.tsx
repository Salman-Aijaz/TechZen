"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
  useEffect(() => {
    AOS.init({  
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <section className="flex flex-col items-center">
        <div
          className="flex max-w-3xl flex-col items-center py-8 px-8 text-center lg:py-28"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
            Empowering Your Business with Innovative Digital Solutions
          </h1>
          <p className="mb-4 text-gray-600 md:mb-6 md:text-lg xl:text-xl">
            Crafting Exceptional Digital Experiences with MERN & JamStack Development for Web Development
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Get In Touch</Link>
            <Link href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-600 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-600 md:text-base">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
