import { PortableTextBlock } from 'next-sanity'

export type CountryAgencies = {
    _id: string,
    _createdAt: Date,
    slug: string,
    countryTitle: string,
    desktopImage: string,
    mobileImage: string,
    desktopImageTwo: string,
    mobileImageTwo: string,
    flagImage: string,
    thumbImage: string,
    shortDescription: PortableTextBlock[],
    mainDescription: PortableTextBlock[],
    mainDescriptionTwo: PortableTextBlock[],
    relatedAgencies: [
        {
            _id: string,
            _createdAt: Date,
            slug: string,
            agencyName: string,
            shortContent: string,
            desktopImage: string,
            mobileImage: string,
            thumbImage: string,
        }
    ]
}