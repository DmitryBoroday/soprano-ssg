import { PortableTextBlock } from 'next-sanity'

export type Locations = {
    _id: string,
    _createdAt: Date,
    slug: string,
    locationTitle: string,
    locationSubTitle: string,
    locationFlagImage: string,
    desktopImage: string,
    mobileImage: string,
    thumbImage: string,
    shortDescription: string,
    mainDescription: PortableTextBlock[],
    relatedCountries: [
        {
            _id: string,
            _createdAt: Date,
            countryTitle: string,
            shortDescription:  PortableTextBlock[],
            desktopImage: string,
            mobileImage: string,
            desktopImageTwo: string,
            mobileImageTwo: string,
            flagImage: string,
            thumbImage: string,
            mainDescription: PortableTextBlock[],
            mainDescriptionTwo: PortableTextBlock[],
        }
    ]
}