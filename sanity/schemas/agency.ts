const agency = {
  name: 'agency',
  title: 'Agency',
  type: 'document',
  fields: [
    {
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
    },
    {
      name: 'shortContent',
      title: 'Short Content',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'agencyName'},
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
      name: 'telegramUrl',
      title: 'Link Telegram URL',
      type: 'url',
    },
    {
      name: 'whatsappUrl',
      title: 'Link Whatsapp URL',
      type: 'url',
    },
    {
      name: 'mainUrl',
      title: 'Main Link URL',
      type: 'url',
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'conditionsBanner',
      title: 'Conditions Banner',
      type: 'string',
    },
    {
      name: 'conditionItems',
      title: 'Conditions List',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'conditionsBannerTwo',
      title: 'Conditions Banner Two',
      type: 'string',
    },
    {
      name: 'conditionItemsTwo',
      title: 'Conditions List Two',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'conditionsBannerThree',
      title: 'Conditions Banner Three',
      type: 'string',
    },
    {
      name: 'conditionItemsThree',
      title: 'Conditions List Three',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export default agency