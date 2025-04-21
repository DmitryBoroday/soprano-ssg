import { PortableTextBlock } from 'next-sanity'

export type TopCountry = {
    _id: string,
    _createdAt: Date,
    slug: string,
    metaTitle: string,
    metaDescription: string,
    countryTitle: string,
    flagImage: string,
    desktopImage: string,
    mobileImage: string,
    thumbImage: string,
    subTitle: string,
    shortDescription: string,
    relatedAgencies: [
        {
            _id: string,
            _createdAt: Date,
            slug: string,
            agencyName: string,
            shortContent: string,
            thumbImage: string,
            desktopImage: string,
            mobileImage: string,
            telegramUrl: string,
            whatsappUrl: string,
            mainUrl: string,
            mainContent: PortableTextBlock[],
            conditionsBanner: string,
            conditionItems: string[],
            conditionsBannerTwo: string[],
            conditionItemsTwo: string[],
            conditionsBannerThree: string,
            conditionItemsThree: string[]
        }
    ]
}