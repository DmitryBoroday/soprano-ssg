export type Category = {
    _id: string,
    _createdAt: Date,
    slug: string,
    categoryTitle: string,
    desktopImage: string,
    mobileImage: string,
    avatarImage: string,
    shortDescription: string,
    relatedBlogs: [
        {
            _id: string,
            _createdAt: Date,
            slug: string,
            blogTitle: string,
            shortContent: string,
            avaImage: string,
            desktopImageOne: string,
            mobileImageOne: string,
            mainContentOne: string,
            desktopImageTwo: string,
            mobileImageTwo: string,
            mainContentTwo: string,
            avatarImage: string,
            authorName: string
        }
    ]
}