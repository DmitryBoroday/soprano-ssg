const vipFlags = {
  name: 'vipFlags',
  title: 'Vip Flags',
  type: 'document',
  fields: [
    {
      name: 'countryTitle',
      title: 'Country Title',
      type: 'string',
    },
    {
      name: 'flagImage',
      title: 'Flag Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}

export default vipFlags