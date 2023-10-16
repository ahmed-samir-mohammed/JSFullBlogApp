import React from 'react'
import { FooterIcons, FooterList } from '../interfaces/Footer'
import { FaYoutube, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa'
import Images from '../constants/images'

const Footer = () => {
    const FOOTER_LINK_LIST: FooterList = {
        product: [
            { name: 'Landingpage', href: '/' },
            { name: 'Features', href: '/' },
            { name: 'Documentation', href: '/' },
            { name: 'Referral Program', href: '/' },
            { name: 'Pricing', href: '/' }
        ],
        services: [
            { name: 'Documentation', href: '/' },
            { name: 'Design', href: '/' },
            { name: 'Themes', href: '/' },
            { name: 'Illustrations', href: '/' },
            { name: 'UI Kit', href: '/' }
        ],
        company: [
            { name: 'About', href: '/' },
            { name: 'Terms', href: '/' },
            { name: 'Privacy Policy', href: '/' },
            { name: 'Careers', href: '/' },
        ],
        more: [
            { name: 'Documentation', href: '/' },
            { name: 'License', href: '/' },
            { name: 'Changelog', href: '/' },
        ],
    }
    console.log(FOOTER_LINK_LIST)


    return (
        <section className='bg-dark-hard'>
            <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5'>
                <div className='col-span-5 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Product</h3>
                    <ul className='text-[#959EAD] text-sm mt-5 space-y-5'>
                        {FOOTER_LINK_LIST.product?.map((item, i) => {
                            return (<li key={i}>
                                <a className='hover:text-white' href={item.href}>{item.name}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className='col-span-5 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Product</h3>
                    <ul className='text-[#959EAD] text-sm mt-5 space-y-5'>
                        {FOOTER_LINK_LIST.services?.map((item, i) => {
                            return (<li key={i}>
                                <a className='hover:text-white' href={item.href}>{item.name}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className='col-span-5 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Product</h3>
                    <ul className='text-[#959EAD] text-sm mt-5 space-y-5'>
                        {FOOTER_LINK_LIST.company?.map((item, i) => {
                            return (<li key={i}>
                                <a className='hover:text-white' href={item.href}>{item.name}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className='col-span-5 lg:col-span-2'>
                    <h3 className='text-dark-light font-bold'>Product</h3>
                    <ul className='text-[#959EAD] text-sm mt-5 space-y-5'>
                        {FOOTER_LINK_LIST.more?.map((item, i) => {
                            return (<li key={i}>
                                <a className='hover:text-white' href={item.href}>{item.name}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className='col-span-10 lg:order-first lg:col-span-2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <img src={Images.Logo} alt="Logo" className='brightness-0 invert' />
                        <p className='mt-4 text-dark-light w-[80%] mx-auto lg:mx-0 text-center lg:text-start'>Build a modern and creative website with crealand</p>
                        <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300'>
                            <li>
                                <a href='/' className=' rounded-full flex justify-center items-center w-8 h-8 text-white'>
                                    <FaYoutube className='w-6 h-auto' />
                                </a>
                            </li>
                            <li>
                                <a href='/' className='rounded-full flex justify-center items-center w-8 h-8 text-white'>
                                    <FaLinkedin className='w-6 h-auto' />
                                </a>
                            </li>
                            <li>
                                <a href='/' className='rounded-full flex justify-center items-center w-8 h-8 text-white'>
                                    <FaTwitter className='w-6 h-auto' />
                                </a>
                            </li>
                            <li>
                                <a href='/' className=' rounded-full flex justify-center items-center w-8 h-8 text-white'>
                                    <FaMedium className='w-6 h-auto' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    )

}

export default Footer