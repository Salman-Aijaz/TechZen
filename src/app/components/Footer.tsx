import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"
import Link from 'next/link'
import {GithubIcon, LinkedinIcon, ProfileIcon, TwitterIcon} from '../assets/Icon/Icon'

const Footer = () => {
  return (
    <div className="bg-gray-50 pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 w-fit mb-4 h-20 px-1 rounded-md flex items-center justify-center shadow-lg">
              <Image
                src={logo}
                alt="Logo"
                className="object-contain"
                width={150}
                height={50}
                priority
              />
            </div>
            <p className="mb-6 text-gray-600 sm:pr-8"> Techzen excels in MERN stack, JAMstack, and Python development,
              delivering innovative and custom digital solutions for startups and enterprises alike.</p>
            <div className="flex gap-4">
              <TwitterIcon/>
              <LinkedinIcon/>
              <GithubIcon/>
            </div>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Home</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Services</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Team</Link>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Services</div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Frontend Development</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Backend Development</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">MERN Stack Development </Link>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</Link>
              </div>

            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</Link>
              </div>

              <div>
                <Link href="#" className="text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms & Conditions</Link>
              </div>

            </nav>
          </div>
        </div>

        <div className="border-t py-8 text-center text-sm text-gray-400">© 2024 - Present TechZen. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer

