"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Salman from "../assets/muhammad salman.jpeg";
import Sufiyan from "../assets/muhammad sufiyan.jpeg";
import Zaeem from "../assets/muhammad zaeem.jpg";
import Hasan from "../assets/muhammad hasan.jpeg";
import { GithubIcon, LinkedinIcon, ProfileIcon } from '../assets/Icon/Icon';
import Link from 'next/link';

const team = [
  {
      id: 1,
      name: 'M.Salman',
      title: 'Full Stack Developer',
      pic: Salman,
      aos: 'fade-up',
      link:["https://muhammadsalman.vercel.app/","https://www.linkedin.com/in/muhammad-salman-158213287/","https://github.com/Salman-Aijaz/"]
  },
  {
      id: 2,
      name: 'M.Sufiyan',
      title: 'Full Stack Developer',
      pic: Sufiyan,
      aos: 'fade-up',
      link:["https://muhammadsufiyanbaig.vercel.app/","https://www.linkedin.com/in/muhammadsufiyanbaig/","https://github.com/muhammadsufiyanbaig"]
  },
  {
      id: 3,
      name: 'M.Zaeem',
      title: 'Frontend Developer',
      pic: Zaeem,
      aos: 'fade-up',
      link:["","https://github.com/muhammadzaeemaltaf/","https://www.linkedin.com/in/muhammad-zaeem-altaf-4887722bb/"]
  },
  {
      id: 4,
      name: 'M.Hasan',
      title: 'Frontend Developer',
      pic: Hasan,
      aos: 'fade-up',
      link:["https://muhammadhasanbaig.vercel.app/","https://github.com/hasan912",""]
  }
];

const Team = () => {
  
  return (
    <div className='pb-16'>
      <h2 className="text-5xl font-bold my-6 text-center">Our Team</h2>
      <p className='text-gray-600 my-2 text-center'>Meet the passionate and talented individuals driving our success with their expertise and dedication.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-6">
        {team.map(({ id, name, title, pic, aos,link }) => (
          <div key={id} data-aos={aos}  
          data-aos-duration="1500"
          data-aos-easing="ease-out" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <Image src={pic} alt={name} layout="fill" className="rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 pb-2">{name}</h3>
            <p className="text-gray-600 pb-2">{title}</p>
            <div className='flex gap-4'>
              <Link href={link[0]} target='_blank' className="text-gray-400 transition duration-100 hover:text-gray-600 active:text-gray-600">
              <ProfileIcon/>
              </Link>

              <Link href={link[1]} target='_blank' className="text-gray-400 transition duration-100 hover:text-gray-600 active:text-gray-600">
              <LinkedinIcon/>
              </Link>

              <Link href={link[2]} target='_blank' className="text-gray-400 transition duration-100 hover:text-gray-600 active:text-gray-600">
              <GithubIcon/>
              </Link>
               </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
