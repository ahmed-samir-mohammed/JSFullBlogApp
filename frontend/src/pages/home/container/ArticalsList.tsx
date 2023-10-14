import { ArticalCard } from "../../../interfaces/ArticalCard"
import ArticalCardItem from "../../../components/ArticalCard"
import { imgaes } from '../../../constants'
import { FaArrowRight } from 'react-icons/fa'


function ArticalsList() {
    const articals_List: ArticalCard[] = [
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: imgaes.ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: imgaes.AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
    ]
    return (
        <section className="flex flex-col container mx-auto px-5 py-10">
            <div className="flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
                {articals_List.map((item) => {
                    return <ArticalCardItem key={item.id} style="w-full md:w-[calc(50%-20px)] lg:w-[calc((100%/3)-21px)]" {...item} />
                })}
            </div>
            <div className="group mx-auto w-fit">
                <button className="flex items-center py-3 px-5 border-[2px] border-primary text-primary rounded-lg w-fit font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300">
                    <span className="me-2 group-hover:me-4 transition-all duration-150">More articles</span>
                    <FaArrowRight />
                </button>
            </div>
        </section>
    )
}

export default ArticalsList