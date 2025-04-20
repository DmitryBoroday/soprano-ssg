import AgenciesSwiper from '@/app/components/AgenciesSwiper'
import BottomNav from '@/app/components/BottomNav'
import { getCountryAgencies } from '@/sanity/sanity-utils'
import { Metadata } from 'next'
import { PortableText } from 'next-sanity'

type Props = { params: Promise<{ countryAgenciesId: string }> }

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const slug = params.countryAgenciesId
    const data = await getCountryAgencies(slug)
    return {
        title: data.metaTitle,
        description: data.metaDescription
    }
}

export default async function CountryAgencies(props: Props) {
    const params = await props.params
    const slug = params.countryAgenciesId
    const data = await getCountryAgencies(slug)
    return (
        <section className='w-full h-full'>
            <div className='w-full h-screen flex flex-col justify-center items-center relative'>
                <video
                    className='w-full h-full object-cover'
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload='auto'
                    width='100%'
                    height='100%'
                >
                    <source
                        src='/videos/countryAgencies/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/countryAgencies/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <div className='fixed right-3 sm:right-5 top-16 sm:top-20 flex items-center gap-2 text-sm text-white font-bold tracking-[2px] drop-shadow-md'>
                    <h1>{data.countryTitle}</h1>
                    <img
                        className='object-cover w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-gradient-to-t from-purple-900 to-violet-400 p-[3px] shadow-lg'
                        src={data.flagImage}
                        alt='flag'
                        fetchPriority='high'
                        loading='eager'
                    />
                </div>
                <AgenciesSwiper data={data} />
                <nav className='md:hidden flex justify-start w-full'>
                    <BottomNav
                        titleLeft={'топ страны'}
                        linkLeft={'/topCountries'}
                        avaLeft={'/images/ava/ava2.avif'}
                        titleRight={'группы'}
                        linkRight={'/groups'}
                        avaRight={'/images/ava/ava4.avif'}
                    />
                </nav>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center gap-8 text-center text-white py-6 sm:py-12'>
                <article className='w-[96%] sm:w-2/3'>
                    <div className='text-xl sm:text-4xl mb-2 sm:mb-4'>
                        <PortableText value={data.shortDescription} />
                    </div>
                    <div className='text-md sm:text-2xl text-white/80'>
                        <PortableText value={data.mainDescription} />
                    </div>
                </article>
                <picture className='w-full h-full'>
                    <source
                        media='(min-width: 640px)'
                        srcSet={data.desktopImage}
                    />
                    <img
                        title='Топ Эскорт - Работа в эскорте по всему миру'
                        src={data.mobileImage}
                        className='bg-black object-cover w-full h-full shadow-sm shadow-black/40'
                        alt='Топ Эскорт - Работа в эскорте по всему миру'
                        width={400}
                        height={800}
                        loading='eager'
                        fetchPriority='high'
                    />
                </picture>
                <article className='w-[96%] sm:w-2/3'>
                    <div className='text-md sm:text-2xl text-white/80'>
                        <PortableText value={data.mainDescriptionTwo} />
                    </div>
                </article>
                <picture className='w-full h-full'>
                    <source
                        media='(min-width: 640px)'
                        srcSet={data.desktopImageTwo}
                    />
                    <img
                        title='Топ Эскорт - Работа в эскорте по всему миру'
                        src={data.mobileImageTwo}
                        className='bg-black object-cover w-full h-full shadow-sm shadow-black/40'
                        alt='Топ Эскорт - Работа в эскорте по всему миру'
                        width={400}
                        height={800}
                        loading='eager'
                        fetchPriority='high'
                    />
                </picture>
            </div>
            <p className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] font-medium text-center pb-6 sm:pb-12'>
                Soprano Escort
            </p>
        </section>
    )
}
