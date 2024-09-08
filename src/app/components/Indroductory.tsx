"use client";
import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Indroductory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      // easing: 'ease-out', 
    });
  }, []);

  return (
    <div ref={sectionRef} className='flex flex-col items-center justify-center sm:min-h-screen pb-16'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4 dark:text-white'>Get to Know</h1>
        <p className='mb-4 text-gray-600'>Watch our introductory video to learn more about our team, our process, and how we can help your business grow.</p>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-out"
          data-aos-offset="200"
          className="w-full max-w-4xl h-auto mb-8 rounded-lg px-4"
        >
          <video
            src="/intro.mp4"
            className="w-full h-auto rounded-lg"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Indroductory;
