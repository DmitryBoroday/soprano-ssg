import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { VipAgency } from '@/types/VipAgency'
import { TopCountry } from '@/types/TopCountry'
import { Agency } from '@/types/Agency'
import { Category } from '@/types/Category'
import { Blog } from '@/types/Blog'
import { Locations } from '@/types/Locations'
import { CountryAgencies } from '@/types/CountryAgencies'


export async function getVipVacancies(): Promise<VipAgency> {
    const client = createClient(clientConfig)

     return client.fetch(
        groq`*[_type == 'vipAgency'] | order(_updatedAt desc) {
            _id,
            _createdAt,
             vipAgencyName,
             'slug': slug.current,
             'thumbImage': thumbImage.asset->url,
             'thumbFlag': thumbFlag.asset->url,
             shortContent,
         }`
    )
}

export async function getVipVacancy(slug:string) {
     return createClient(clientConfig).fetch(
          groq`*[_type == 'vipAgency' && slug.current == $slug][0] {
              _id,
              _createdAt,
              vipAgencyName,
              'slug': slug.current,
              'desktopImage': desktopImage.asset->url,
              'mobileImage': mobileImage.asset->url,
              'thumbImage': thumbImage.asset->url,
              bannerContent,
              shortContent,
              mainUrl,
              whatsappUrl,
              telegramUrl,
              conditionsBanner,
              conditionItems[],
              conditionsBannerTwo,
              conditionItemsTwo[],
              conditionsBannerThree,
              conditionItemsThree[],
              relatedFlags[]->{
              countryTitle,
              'flagImage': flagImage.asset->url,
             }
        }`, { slug }
    )
}

export async function getTopCountries(): Promise<TopCountry[]> {
    const client = createClient(clientConfig)
    
     return client.fetch(
        groq`*[_type == 'topCountry'] | order(_updatedAt desc) {
            _id,
            _createdAt,
            countryTitle,
            subTitle,
            shortDescription,
            'slug': slug.current,
            'flagImage': flagImage.asset->url,
            'thumbImage': thumbImage.asset->url,
            'mobileImage': mobileImage.asset->url,
            'desktopImage': desktopImage.asset->url,
         }`
    )
}

export async function getTopCountry(slug: string): Promise<TopCountry>{
     const client = createClient(clientConfig)
    return client.fetch(
        groq`*[_type == 'topCountry' && slug.current == $slug][0]{
            _id,
            _createdAt,
            countryTitle,
            'slug': slug.current,
            'flagImage': flagImage.asset->url,
            'relatedAgencies': relatedAgencies[]->{
                _id,
                _createdAt,
                agencyName,
                shortContent,
                date,
                'slug': slug.current,
                'thumbImage': thumbImage.asset->url,
                'desktopImage': desktopImage.asset->url,
                'mobileImage': mobileImage.asset->url
             }        
         }`,{slug}
    )
}

export async function getAgency(slug: string): Promise<Agency> {
    return createClient(clientConfig).fetch(
          groq`*[_type == 'agency' && slug.current == $slug][0] {
              _id,
              _createdAt,
              agencyName,
              'slug': slug.current,
              'desktopImage': desktopImage.asset->url,
              'mobileImage': mobileImage.asset->url,
              'thumbImage': thumbImage.asset->url,
              mainContent,
              shortContent,
              mainUrl,
              whatsappUrl,
              telegramUrl,
              conditionsBanner,
              conditionItems[],
              conditionsBannerTwo,
              conditionItemsTwo[],
              conditionsBannerThree,
              conditionItemsTree[],
        }`, { slug }
    )
}

export async function getBlogTopics(): Promise<Category[]> {
    const client = createClient(clientConfig)
    
      return client.fetch(
        groq`*[_type == 'category'] | order(_updatedAt desc) {
            _id,
            _createdAt,
             categoryTitle,
             shortDescription,
             'slug': slug.current,
             'avatarImage': avatarImage.asset->url,
         }`
    )
}

export async function getBlogTopic(slug: string): Promise<Category>{
     const client = createClient(clientConfig)
    return client.fetch(
        groq`*[_type == 'category' && slug.current == $slug][0]{
            _id,
            _createdAt,
            categoryTitle,
            'slug': slug.current,
            'avatarImage': avatarImage.asset->url,
            'mobileImage': mobileImage.asset->url,
            'desktopImage': desktopImage.asset->url,
            'relatedBlogs': relatedBlogs[]->{
                _id,
                _createdAt,
                blogTitle,
                shortContent,
                'slug': slug.current,
                'avaImage': avaImage.asset->url,
                'desktopImageOne': desktopImageOne.asset->url,
                'mobileImageOne': mobileImageOne.asset->url
             }        
         }`,{slug}
    )
}

export async function getBlog(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
          groq`*[_type == 'blog' && slug.current == $slug][0] {
              _id,
              _createdAt,
              blogTitle,
              mainContentOne,
              mainContentTwo,
              'slug': slug.current,
              'avaImage': avaImage.asset->url,
              'desktopImageOne': desktopImageOne.asset->url,
              'mobileImageOne': mobileImageOne.asset->url,
              'desktopImageTwo': desktopImageTwo.asset->url,
              'mobileImageTwo': mobileImageTwo.asset->url,
        }`, { slug }
    )
}

export async function getLocations(): Promise<Locations[]> {
     const client = createClient(clientConfig)

   return client.fetch(
        groq`*[_type == 'locationCountries'] | order(_updatedAt desc){
            _id,
            _createdAt,
             locationTitle,
             locationSubTitle,
             shortDescription,
             'slug': slug.current,
             'thumbImage': thumbImage.asset->url,
             'locationFlagImage': locationFlagImage.asset->url,
         }`
    )
}

export async function getLocationCountries(slug: string): Promise<Locations> {
    const client = createClient(clientConfig)
    return client.fetch(
        groq`*[_type == 'locationCountries' && slug.current == $slug][0] {
            _id,
            _createdAt,
             locationTitle,
             shortDescription,
             mainDescription,
             'slug': slug.current,
             'locationFlagImage': locationFlagImage.asset->url,
             'relatedCountries': relatedCountries[]->{
                _id,
                _createdAt,
                countryTitle,
                shortDescription,
                'slug': slug.current,
                'flagImage': flagImage.asset->url,
                'thumbImage': thumbImage.asset->url,
             }
         }`, { slug }
    )
}

export async function getCountryAgencies(slug: string): Promise<CountryAgencies> {
    const client = createClient(clientConfig)
    return client.fetch(
        groq`*[_type == 'country' && slug.current == $slug][0] {
            _id,
            _createdAt,
             countryTitle,
             shortDescription,
             mainDescription,
             mainDescriptionTwo,
             'slug': slug.current,
             'flagImage': flagImage.asset->url,
             'desktopImage': desktopImage.asset->url,
             'mobileImage': mobileImage.asset->url,
             'desktopImageTwo': desktopImageTwo.asset->url,
             'mobileImageTwo': mobileImageTwo.asset->url,
             'relatedAgencies': relatedAgencies[]->{
                _id,
                _createdAt,
                agencyName,
                shortContent,
                'slug': slug.current,
                'desktopImage': desktopImage.asset->url,
                'mobileImage': mobileImage.asset->url,
                'thumbImage': thumbImage.asset->url,
             }
         }`, { slug }
    )
}

