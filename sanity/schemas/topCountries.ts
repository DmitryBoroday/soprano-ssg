const topCountry = {
  name: 'topCountry',
  title: 'Top Country',
  type: 'document',
  fields: [
    {
      name: 'countryTitle',
      title: 'Country Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'countryTitle'},
    },
    {
      name: 'flagImage',
      title: 'Flag Image',
      type: 'image',
      options: {hotspot: true},
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
      name: 'thumbImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'subTitle',
      title: 'Country Subtitle',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'relatedAgencies',
      title: 'Related Agencies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'agency'}}],
    },
  ],
}

export default topCountry