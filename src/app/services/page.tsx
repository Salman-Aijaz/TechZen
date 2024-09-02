'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"


const  Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className={
            "grid px-2 md:px-28 lg:px-40 relative gap-10 my-16 cursor-default select-none"
        }>
            <div className='sticky'>
                {/*<Link href={'/signin'}>*/}
                  {/* <Button/> */}
                {/*</Link>*/}
            </div>
            <div className='grid md:grid-cols-2 gap-5 relative'>
                <div data-aos="flip-up" className='bg-gr-primary absolute top-[35%] left-28 rounded-[100%] w-64 h-64 filter dark:blur-[70px] blur-[100px]'></div>
                <div data-aos="zoom-out-up" className={
                    `dark:bg-[#1D1A27] shadow-md dark:shadow-card z-10 rounded-[18px] grid grid-cols-2 `
                }>
                    <div className='h-52 md:p-4 p-2  overflow-hidden'>
                        {/* <p className='bg-[#5E5B71] rounded-[18px] mb-5 flex justify-center items-center font-bold text-3xl w-14 h-14'>1</p> */}
                        <span className='text-lg md:text-xl font-semibold'>Enhance Your Skills</span>
                        <p className={'text-gray-500 text-sm md:text-base pt-2'}>This learning opportunity provides a comprehensive exploration of the dynamic world of digital assets and the art of trading </p>
                            {/*<button className='md:mt-7 mt-3 text-primary'>View Courses</button>*/}
                    </div>
                    <div className='bg-gr-primary relative overflow-hidden rounded-[18px]'>
                        {/* <Image
                            src={accountMock}
                            alt=''
                            width={150}
                            height={150}
                            className='absolute -bottom-12 left-5 md:left-16 z-20'
                        /> */}
                    </div>
                </div>
                <div data-aos="zoom-out-up" className={
                    `dark:bg-[#1D1A27] shadow-md dark:shadow-card z-10 rounded-[18px] grid grid-cols-2 `
                }>
                    <div className='h-52 md:p-4 p-2  overflow-hidden'>
                        {/* <p className='bg-[#5E5B71] rounded-[18px] mb-5 flex justify-center items-center font-bold text-3xl w-14 h-14'>2</p> */}
                        <span className='text-lg md:text-xl font-semibold'>Select Challenge Type</span>
                        <p className='text-gray-500 text-sm md:text-base pt-2'>Choose your trading challenge type and take the first step towards honing your skills in the financial markets </p>
                    </div>
                    <div className='bg-gr-primary relative overflow-hidden rounded-[18px]'>
                        {/* <Image
                            src={challengeMock}
                            alt=''
                            width={150}
                            height={150}
                            className='absolute -bottom-0 left-5 md:left-16 z-20'
                        /> */}
                    </div>
                </div>
                <div data-aos="zoom-out-up" className={
                    `dark:bg-[#1D1A27] shadow-md dark:shadow-card z-10 rounded-[18px] grid grid-cols-2  `
                }>
                    <div className='h-52 md:p-4 p-2  overflow-hidden'>
                        {/* <p className='bg-[#5E5B71] rounded-[18px] mb-5 flex justify-center items-center font-bold text-3xl w-14 h-14'>3</p> */}
                        <span className='text-lg md:text-xl font-semibold'>Start Trading</span>
                        <p className='text-gray-500 text-sm md:text-base pt-2'>Embark on your trading journey with confidence as you initiate the &quot;Start Trading&quot; phase</p>
                    </div>
                    <div className='bg-gr-trading-mock relative rounded-[18px]'>
                        {/* <Image
                            src={tradingMock}
                            alt=''
                            width={220}
                            height={220}
                            className='absolute -bottom-0 left-0 md:left-8 z-20'
                        /> */}
                    </div>
                </div>
                <div data-aos="zoom-out-up" className={

                    `dark:bg-[#1D1A27] shadow-md dark:shadow-card z-10 rounded-[18px] grid grid-cols-2  `
                }>
                    <div className='h-52 md:p-4 p-2  overflow-hidden'>
                        {/* <p className='bg-[#5E5B71] rounded-[18px] mb-5 flex justify-center items-center font-bold text-3xl w-14 h-14'>3</p> */}
                        <span className='text-lg md:text-xl font-semibold'>P2P Trade</span>
                        <p className='text-gray-500 text-sm md:text-base pt-2'>Seamlessly connect with other users to buy and sell assets without the need for intermediaries </p>
                    </div>
                    <div className='bg-gr-primary relative rounded-[18px]'>
                        {/* <Image
                            src={tradingMock}
                            alt=''
                            width={220}
                            height={220}
                            className='absolute -bottom-0 left-0 md:left-8 z-20'
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Services



