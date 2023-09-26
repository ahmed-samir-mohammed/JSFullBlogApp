export interface ArticalCard {
    id: string
    img: string
    heading: string
    description: string
    date: string
    auther: ArticalAuther
    style?: string
}

export interface ArticalAuther {
    img: string
    name: string
    isverified: boolean
}