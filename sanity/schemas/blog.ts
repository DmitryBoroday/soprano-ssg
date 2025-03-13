const blog = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'blogTitle',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'blogTitle'},
    },
    {
      name: 'shortContent',
      title: 'Short Content',
      type: 'string',
    },
    {
      name: 'avaImage',
      title: 'Ava Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'desktopImageOne',
      title: 'Desktop Image One',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mobileImageOne',
      title: 'Mobile Image One',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mainContentOne',
      title: 'Main Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'desktopImageTwo',
      title: 'Desktop Image Two',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mobileImageTwo',
      title: 'Mobile Image Two',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mainContentTwo',
      title: 'Main Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
  ],
}

export default blog