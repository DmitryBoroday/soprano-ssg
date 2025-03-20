const locationCountries = {
  name: 'locationCountries',
  title: 'Location Countries',
  type: 'document',
  fields: [
    {
      name: 'locationTitle',
      title: 'Location Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'locationTitle'},
    },
    {
      name: 'locationFlagImage',
      title: 'Location Flag Image',
      type: 'image',
    },
   
    {
      name: 'thumbImage',
      title: 'Thumb Image',
      type: 'image',
      options: {hotspot: true},
    },
      {
      name: 'locationSubTitle',
      title: 'Location Subtitle',
      type: 'string',
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'relatedCountries',
      title: 'Related Countries',
      type: 'array',
      of: [{type: 'reference', to: {type: 'country'}}],
    },
  ],
}

export default locationCountries