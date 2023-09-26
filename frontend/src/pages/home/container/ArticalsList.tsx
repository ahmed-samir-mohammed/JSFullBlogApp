import { ArticalCard } from "../../../interfaces/ArticalCard"
import AutherImage from '../../../assets/cesar-rincon-xh-vp-wcr-5-gr-q-unsplash-1.png'
import ArticalImage from '../../../assets/ales-nesetril-im-7-l-zjxe-lhg-unsplash-1.jpg'
import ArticalCardItem from "../../../components/ArticalCard"


function ArticalsList() {
    const articals_List: ArticalCard[] = [
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        },
        {
            img: ArticalImage,
            id: `atrical-id-${Math.floor(Math.random() * 100)}`,
            heading: 'Help Finding Information Online',
            description: 'Majority of peole will work in jobs that don’t exist today.',
            date: '02 May',
            auther: {
                img: AutherImage,
                name: 'Bobby Stevens',
                isverified: true
            }
        }
    ]
    return (
        <div className="container mx-auto flex flex-col px-5 py-5 lg:flex-row lg:items-center">
            {articals_List.map((item) => {
                return <ArticalCardItem key={item.id} style="w-1/3" {...item} />
            })}
        </div>
    )
}

export default ArticalsList