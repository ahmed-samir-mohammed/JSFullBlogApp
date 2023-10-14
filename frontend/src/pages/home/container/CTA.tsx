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
                <div className='container grid grid-cols-12 mx-auto'>
                    <div className='col-span-12'>
                        <h2 className='text-white font-bold font-roboto text-2xl'>
                            Get our stories delivered From us to your inbox weekly.
                        </h2>
                        <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
                            <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email' />
                            <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold' >Get started</button>
                        </div>
                        <p className='text-dark-light text-sm leading-7 mt-6'>
                            <span className='font-bold italic text-[#B3BAC5]'>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                    <div className='col-span-12 hidden md:flex mb-[70px]'>
                        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
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
            </section>
        </>
    )
}

export default CTA