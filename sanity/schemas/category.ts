const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'categoryTitle',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'categoryTitle'},
    },
    {
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'relatedBlogs',
      title: 'Related Blogs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blog'}}],
    },
  ],
}

export default category