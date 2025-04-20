const country = {
  name: 'country',
  title: 'Country',
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
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
     {
      name: 'metaDescriptio',
      title: 'Meta Description',
      type: 'string',
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
      name: 'desktopImageTwo',
      title: 'Second Desktop Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'mobileImageTwo',
      title: 'Second Mobile Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'flagImage',
      title: 'Flag Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'thumbImage',
      title: 'Thumb Image',
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
      name: 'mainDescription',
      title: 'Main Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'mainDescriptionTwo',
      title: 'Second Main Description',
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

export default country