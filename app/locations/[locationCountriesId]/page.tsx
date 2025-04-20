import BottomNav from '@/app/components/BottomNav'
import LocationCoSwiper from '@/app/components/LocationCoSwiper'
import { getLocationCountries } from '@/sanity/sanity-utils'
import { Metadata } from 'next'


type Props = { params: Promise<{ locationCountriesId: string }> }

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params
    const slug = params.locationCountriesId
    const data = await getLocationCountries(slug)
    return {
        title: data.metaTitle,
        description: data.metaDescription
    }
}

export default async function LocationCountries(props: Props) {
    const params = await props.params
    const slug = params.locationCountriesId
    const data = await getLocationCountries(slug)
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='relative w-full h-full'>
                <video
                    className='bg-black w-full h-full object-cover'
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload='auto'
                    width='100%'
                    height='100%'
                >
                    <source
                        src='/videos/locationCountries/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/locationCountries/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <LocationCoSwiper data={data} />
                <div className='fixed right-3 sm:right-5 top-16 sm:top-20 flex items-center gap-2 text-sm text-white font-bold tracking-[2px] drop-shadow-md'>
                    <h1>{data.locationTitle}</h1>
                    <img
                        className='object-cover w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-gradient-to-t from-purple-900 to-violet-400 p-[3px] shadow-lg'
                        src={data.locationFlagImage}
                        alt='flag'
                        fetchPriority='high'
                        loading='eager'
                    />
                </div>
            </div>
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
        </section>
    )
}
