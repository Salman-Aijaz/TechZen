"use client"
import React, { useEffect } from 'react';
import WhiteCircle from '../assets/white-circle.png';
import Image from 'next/image';
import SolutionIcon from "../assets/solution.png"
import TechIcon from "../assets/technology.png"
import ClientIcon from "../assets/customer-experience-icon.jpg"
import 'aos/dist/aos.css';
import AOS from "aos"

const features = [
  {
    title: 'Customized Solutions for Unique Business Needs',
    description: 'We know that no two businesses are alike, which is why we design personalized solutions tailored to your specific goals and challenges. Our focus is on delivering strategies that align perfectly with your vision, driving growth and success.',
    icon:SolutionIcon
  },
  {
    title: 'Cutting-Edge Technology for Future Success',
    description: 'By utilizing the latest advancements in technology, we ensure your digital solutions are not only state-of-the-art today but built to thrive in the future. Innovation is at the core of everything we do, keeping you ahead of the curve.',
    icon:TechIcon
  },
  {
    title: 'A Client-First Collaborative Approach',
    description: 'Your success is our priority. We work hand-in-hand with you to bring your vision to life, ensuring every solution is shaped by your unique needs and aspirations. Our team is dedicated to your satisfaction at every step.',
    icon:ClientIcon
  },
];

const WhyChooseUs = () => {

//   useEffect(() => {
//     AOS.init({ duration: 2000 });
// }, []);

  return (
    <div className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12 lg:ml-5 ml-3">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="relative mb-8">
            <div className="absolute inset-0 xl:flex hidden justify-evenly items-center">
              <Image 
                src={WhiteCircle} 
                alt="Background Circle" 
                className="opacity-20" 
                width={300} 
                height={200} 
              />
            </div>
            <p className='relative text-gray-600 xl:w-3/5'>
              We focus on understanding your unique needs to deliver tailored, 
              innovative solutions that drive real results. With a client-first approach,
              we collaborate closely to turn your vision into success, supporting you every step of the way.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
        {features.map((feature, index) => (
          <>
            <div data-aos="fade-down-right"  key={index} className="relative flex flex-col bg-gray-50 p-6 rounded-lg shadow-xl max-w-xs mx-4 mb-8">
              <Image src={feature.icon} alt="Icon" className="w-16 h-16 mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 rounded-lg"></div>
            </div>
            <div className="absolute inset-0 xl:flex justify-end place-items-end hidden">
            <Image 
              src={WhiteCircle} 
              alt="Background Circle" 
              className="opacity-20" 
              width={300} 
              height={200} 
            />
          </div>
          </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
