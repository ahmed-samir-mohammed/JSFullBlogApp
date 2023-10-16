export interface FooterList {
    product?: Link[]
    services?: Link[]
    company?: Link[]
    more?: Link[]
}

export interface FooterIcons {
    icon?: any
    href?: string
}

interface Link {
    name?: string,
    href?: string
}

