import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { imgaes } from '../constants';
import { NavItemProps } from '../interfaces/Header';

const navList: NavItemProps[] = [
    {
        name: 'Home',
        link: '/',
        type: "link"
    },
    {
        name: 'Articles',
        link: '/articles',
        type: "link"
    },
    {
        name: 'Pages',
        link: '/pages',
        type: "dropdown",
        items: [
            {
                name: "About Us",
                link: "/about",
                type: "link"
            },
            {
                name: "Contact Us",
                link: "/contact",
                type: "link"
            }
        ]
    },
    {
        name: 'Pricing',
        link: '/pricing',
        type: "link"
    },
    {
        name: 'Faq',
        link: '/faq',
        type: "link"
    }
]


const NavItem = ({ name, link, items, type }: NavItemProps) => {
    return (
        <li className='relative group'>
            {type === 'link' ? (
                <>
                    <a href={link} className='px-4 py-2'>
                        {name}
                    </a>
                    <span className='text-blue-500 absolute transition-all duration-500 font-bold left-0 top-0 opacity-0 group-hover:left-[90%] group-hover:opacity-100'>/</span>
                </>
            ) : (
                <>
                    <a href={link} className='px-4 py-2 flex items-center'>
                        <span>{name}</span>
                        <MdOutlineKeyboardArrowDown className='text-white lg:text-dark-hard' />
                    </a>
                    <div className='hidden bg-white transition-all duration-300 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max'>
                        <ul className='flex flex-col shadow-lg rounded-lg overflow-hidden'>
                            {items?.map((item: NavItemProps) => {
                                return (
                                    <a href={item.link} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                                        {item.name}
                                    </a>
                                )
                            })}
                        </ul>
                    </div>
                </>
            )}
        </li>
    )
}

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);
    const navVisibblityHandler = () => {
        setNavIsVisible((curState) => !curState)
        console.log(navIsVisible)
    }
    return (
        <section>
            <header className={`container mx-auto px-5 flex justify-between items-center py-4`}>
                <a href='/'>
                    <img className='w-16' src={imgaes.Logo} alt="Logo" />
                </a>
                <div className='z-[50] flex lg:hidden'>
                    {navIsVisible ?
                        <AiOutlineClose className='w-6 h-6' onClick={navVisibblityHandler} /> :
                        <AiOutlineMenu className='w-6 h-6' onClick={navVisibblityHandler} />}
                </div>
                <div className={`${navIsVisible ? 'right-0 opacity-100' : '-right-full opacity-0'} lg:opacity-100 transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                    <ul className='flex text-white lg:text-dark-hard flex-col lg:flex-row gap-x-2 items-center gap-y-5 '>
                        {
                            navList.map((link: NavItemProps) => {
                                return (
                                    <NavItem key={link.name} {...link} />
                                )
                            })
                        }
                    </ul>
                    <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
                </div>
            </header>
        </section>
    )
}


export default Header