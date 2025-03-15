import { PortableTextBlock } from 'next-sanity'

export type DailyBlog = {
    _id: string,
    _createdAt: Date,
    slug: string,
    dailyBlogTitle: string,
    shortContent: string,
    avaImage: string,
    desktopImageOne: string,
    mobileImageOne: string,
    mainContentOne: PortableTextBlock[],
    desktopImageTwo: string,
    mobileImageTwo: string,
    mainContentTwo: PortableTextBlock[],
}