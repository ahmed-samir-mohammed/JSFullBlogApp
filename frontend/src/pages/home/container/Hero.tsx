import { FiSearch } from "react-icons/fi";
import { imgaes } from '../../../constants'

function Hero() {
    const populatTags: { name: string }[] = [
        { name: 'Design' },
        { name: 'User Experience' },
        { name: 'User Interfaces' }
    ]
    return (
        <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row lg:items-center lg:h-[70vh]'>
            <div className='mt-10 lg:w-1/2'>
                <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read the most interesting articles</h1>
                <p className='text-dark-light mt-4 text-center md:text-lg lg:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className='flex flex-col gap-y-2.5 mt-10 relative'>
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#959EAD]" />
                        <input className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-4 w-full py-4 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" placeholder='Search article' type="text" />
                    </div>
                    <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">Search</button>
                </div>
                <div className="flex mt-4 flex-col lg:items-center lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                    <span className="text-dark-light min-w-max font-semibold italic">Popular Tags :</span>
                    <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:mt-0">
                        {populatTags.map((item: string | any, i) => {
                            return <li className="bg-primary italic text-primary bg-opacity-10 px-3 py-1.5 font-semibold rounded-lg" key={i} >{item.name}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block lg:w-1/2'>
                <img className="w-full" src={imgaes.HeroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero