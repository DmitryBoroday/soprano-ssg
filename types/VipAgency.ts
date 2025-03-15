import { PortableTextBlock } from 'next-sanity'

export type VipAgency = {
    _id: string,
    _createdAt: Date,
    slug: string,
    vipAgencyName: string,
    shortContent: string,
    bannerContent: PortableTextBlock[],
    relatedFlags: [
        {
            _id: string,
            _createdAt: Date,
            countryTitle: string,
            flagImage: string
        }
    ],
    desktopImage: string,
    mobileImage: string,
    thumbImage: string,
    date: string,
    telegramUrl: string,
    whatsappUrl: string,
    mainUrl: string,
    conditionsBanner: string,
    conditionItems: string[],
    conditionsBannerTwo: string,
    conditionItemsTwo: string[],
    conditionsBannerThree: string,
    conditionItemsThree: string
}