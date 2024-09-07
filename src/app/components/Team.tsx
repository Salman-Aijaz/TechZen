"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Salman from "../../../public/muhammad salman.jpeg";
import Sufiyan from "../../../public/muhammad sufiyan.jpeg";
import Zaeem from "../../../public/muhammad zaeem.jpg";
import Hasan from "../../../public/muhammad hasan.jpeg";
import AOS from 'aos';

const team = [
  {
      id: 1,
      name: 'M.Salman',
      title: 'Full Stack Developer',
      pic: Salman,
      aos: 'fade-up'
  },
  {
      id: 2,
      name: 'M.Sufiyan',
      title: 'Full Stack Developer',
      pic: Sufiyan,
      aos: 'fade-up'
  },
  {
      id: 3,
      name: 'M.Zaeem',
      title: 'Frontend Developer',
      pic: Zaeem,
      aos: 'fade-up'
  },
  {
      id: 4,
      name: 'M.Hasan',
      title: 'Frontend Developer',
      pic: Hasan,
      aos: 'fade-up'
  }
];

const Team = () => {
  
  return (
    <div className='py-10'>
      <h2 className="text-5xl font-bold my-6 text-center dark:text-white">Our Team</h2>
      <p className='text-gray-600 my-2 text-center'>Meet the passionate and talented individuals driving our success with their expertise and dedication.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-6">
        {team.map(({ id, name, title, pic, aos }) => (
          <div key={id} data-aos={aos}  
          data-aos-duration="1500"
          data-aos-easing="ease-out" className="bg-gray-100 dark:bg-card dark:hover:bg-white/20 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <Image src={pic} alt={name} layout="fill" className="rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
