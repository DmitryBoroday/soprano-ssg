const dailyBlog = {
  name: 'dailyBlog',
  title: 'Daily Blog',
  type: 'document',
  fields: [
    {
      name: 'dailyBlogTitle',
      title: 'Daily Blog Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'dailyBlogTitle'},
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
  ],
}

export default dailyBlog