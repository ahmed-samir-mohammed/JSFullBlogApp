import React from 'react'
import { imgaes } from '../../../constants'

function CTA() {
    return (
        <>
            <svg
                className='w-full h-auto max-h-40 translate-y-[1px]'
                preserveAspectRatio='none'
                viewBox="0 0 2160 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    id="Wave"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
                    fill="#0D2436" />
            </svg>
            <section className='relative bg-dark-hard px-5'>
                <div className='container grid grid-cols-12 mx-auto md:pb-20 lg:place-content-center'>
                    <div className='col-span-12 lg:col-span-6 pt-8'>
                        <h2 className='text-white font-bold font-roboto text-2xl md:text-4xl md:text-center lg:text-start md:leading-normal '>
                            Get our stories delivered From us to your inbox weekly.
                        </h2>
                        <div className='w-full max-w-[494px] lg:max-w-[90%] mt-12 space-y-3 mx-auto lg:mx-0 md:space-y-0 md:flex md:items-center md:space-x-2'>
                            <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email' />
                            <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap' >Get started</button>
                        </div>
                        <p className='text-dark-light text-sm leading-7 mt-6 md:text-center lg:text-start md:text-base'>
                            <span className='font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light'>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                    <div className='col-span-12 lg:col-span-6 hidden mb-[70px] md:block order-first lg:order-last'>
                        <div className='w-3/4 mx-auto relative'>
                            <div className='w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]' />
                            <div className='w-1/2 h-1/2 bg-white opacity-10 rounded-lg absolute -bottom-[10%] -left-[8%]' />
                            <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                                <img src={imgaes.CTA} className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60" alt={'The best aticles every week'} />
                                <div className="p-5">
                                    <div className="flex flex-col">
                                        <h2 className="text-dark-soft font-bold text-xl font-opensans md:text-2xl">The best aticles every week</h2>
                                        <p className="font-opensans text-dark-light mt-3 text-sm md:text-base">Our insurance plans offers are priced the same everywhere else.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA