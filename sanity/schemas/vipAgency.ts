const vipAgency = {
  name: 'vipAgency',
  title: 'Vip Agency',
  type: 'document',
  fields: [
    {
      name: 'vipAgencyName',
      title: 'Vip Agency Name',
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
      options: {source: 'vipAgencyName'},
    },
    {
      name: 'bannerContent',
      title: 'Banner Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'relatedFlags',
      title: 'Related Flags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'vipFlags'}}],
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

export default vipAgency