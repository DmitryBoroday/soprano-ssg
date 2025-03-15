import { PortableTextBlock } from 'next-sanity'

export type Blog = {
    _id: string,
    _createdAt: Date,
    slug: string,
    blogTitle: string,
    shortContent: string,
    avaImage: string,
    desktopImageOne: string,
    mobileImageOne: string,
    mainContentOne: PortableTextBlock[],
    desktopImageTwo: string,
    mobileImageTwo: string,
    mainContentTwo: PortableTextBlock[],
    avatarImage: string,
    authorName: string
}