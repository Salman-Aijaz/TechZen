import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import contactbg from "../../../public/contact-bg.jpg"

const ContactHero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-16 px-8 md:px-16 bg-white dark:bg-gray-950">
      {/* Left Text Section */}
      <div className="text-center lg:text-left mb-10 md:mb-0 md:max-w-md">
        <h2 className="font-bold my-4 dark:text-white xl:text-8xl lg:text-7xl text-6xl">
          Reach <span className="text-[#268d8a]">Out</span> to Us{" "}
          <span className="text-purple-700 xl:text-8xl lg:text-7xl text-6xl">Anytime!</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 lg:w-80 my-6">
          Need help scaling on our platform? Our team is here to provide expert
          support and guidance for your success.
        </p>
        <Link
          href="#"
          className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
        >
          Get In Touch
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="w-full py-8 lg:py-0 md:w-3/4 lg:w-2/5 flex justify-center md:justify-end">
        <Image
          src={contactbg}
          alt="Contact Background"
          width={400}
          height={1000}
          className="w-3/4 sm:w-2/3 md:w-full lg:w-4/5 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactHero;
