import BottomNav from '@/app/components/BottomNav'
import TopCoAgenciesSwiper from '@/app/components/TopCoAgenciesSwiper'
import { getTopCountry } from '@/sanity/sanity-utils'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

// const data = {
//     countryTitle: 'Japan',
//     flagImage: '/images/swiperData/flag4.jpg',
//     relatedAgencies: [
//         {
//             link: '/topCountries/1/1',
//             agencyName: 'Agency Name 1',
//             shortContent: 'Short content 1',
//             thumbImage: '/images/swiperData/ava1.jpg',
//         },
//         {
//             link: '/topCountries/1/1',
//             agencyName: 'Agency Name 2',
//             shortContent: 'Short content 2',
//             thumbImage: '/images/swiperData/ava2.jpg',
//         },
//         {
//             link: '/topCountries/1/1',
//             agencyName: 'Agency Name 3',
//             shortContent: 'Short content 3',
//             thumbImage: '/images/swiperData/ava3.jpg',
//         },
//         {
//             link: '/topCountries/1/1',
//             agencyName: 'Agency Name 4',
//             shortContent: 'Short content 4',
//             thumbImage: '/images/swiperData/ava4.jpg',
//         },
//         {
//             link: '/topCountries/1/1',
//             agencyName: 'Agency Name 5',
//             shortContent: 'Short content 5',
//             thumbImage: '/images/swiperData/ava5.jpg',
//         },
//     ]
// }

type Props = { params: Promise<{ topCountryId: string }> }

export default async function TopCountry(props: Props) {
    const params = await props.params
    const slug = params.topCountryId
    const data = await getTopCountry(slug)
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
                        src='/videos/topCountry/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/topCountry/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <div className='fixed right-3 sm:right-7 top-16 sm:top-20 flex items-center gap-2 text-sm tracking-[2px] text-white font-bold textShadow'>
                    <p>{data.countryTitle}</p>
                    <img
                        title='Флаг страны'
                        className='object-cover w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-gradient-to-t from-violet-600 to-sky-400 p-[3px] shadow-lg'
                        src={data.flagImage}
                        alt='Флаг страны'
                        fetchPriority='high'
                        loading='eager'
                    />
                </div>
                <TopCoAgenciesSwiper data={data} />
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl textShadow'>
                    SOPRANO ESCORT
                </p>
            </div>
            <Link
                href='/topCountries'
                className='fixed top-16 sm:top-20 left-2 sm:left-3 rounded-full bg-black/70 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white z-30 p-1'
            >
                <MoveLeft size={22} />
            </Link>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'вип вакансии'}
                    linkLeft={'/vipVacancies'}
                    avaLeft={'/images/ava/ava1.avif'}
                    titleRight={'весь мир'}
                    linkRight={'/locations'}
                    avaRight={'/images/ava/ava3.avif'}
                />
            </nav>
        </section>
    )
}
