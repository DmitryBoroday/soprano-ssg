import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sopranoescort.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://sopranoescort.com/locations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://sopranoescort.com/vipVacancies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
     {
      url: 'https://sopranoescort.com/topCountries',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
      {
      url: 'https://sopranoescort.com/groups',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://sopranoescort.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}