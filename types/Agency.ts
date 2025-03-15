import { PortableTextBlock } from 'next-sanity'

export type Agency = {
    _id: string,
    _createdAt: Date,
    slug: string,
    agencyName: string,
    shortContent: string,
    desktopImage: string,
    mobileImage: string,
    thumbImage: string,
    telegramUrl: string,
    whatsappUrl: string,
    mainUrl: string,
    mainContent: PortableTextBlock[],
    conditionsBanner: string,
    conditionItems: string[],
    conditionsBannerTwo: string,
    conditionItemsTwo: string[],
    conditionsBannerThree: string,
    conditionItemsThree: string[],
    relatedFlags: []
}