import React from 'react'
import BottomNav from '../components/BottomNav'
import Link from 'next/link'
import { MoveLeft, MoveRight } from 'lucide-react'
import LocationsSwiper from '../components/LocationsSwiper'
import { getLocations } from '@/sanity/sanity-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Все больше и больше девушек выбирают работу в эскорте за границей',
    description: 'Работа в эскорте за границей так привлекательна для девушек потому что здесь предоставляется возможность познакомиться с разными богатыми клиентами и путешествовать по разным странам',
    twitter: {
        card: 'summary_large_image'
    },
    openGraph: {
        title: 'Все больше и больше девушек выбирают работу в эскорте за границей',
        description: 'Работа в эскорте за границей так привлекательна для девушек потому что здесь предоставляется возможность познакомиться с разными богатыми клиентами и путешествовать по разным странам',
        url: 'https://www.sopranoescort.com/locations',
        type: 'website'
    }
}

export default async function Locations() {
    const data = await getLocations()
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
                        src='/videos/locations/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/locations/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <div className='absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-transparent to-transparent'></div>
                <LocationsSwiper data={data} />
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                    SOPRANO ESCORT
                </p>
                <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                    <img
                        title='Эскорт вакансии по всему миру'
                        className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-purple-900 to-violet-400 p-[2px] rounded-full'
                        src='/images/ava/ava3.avif'
                        alt='Эскорт вакансии по всему миру'
                        loading='lazy'
                        width={48}
                        height={48}
                    />
                    <p className='text-center text-white font-bold text-sm drop-shadow-md'>
                        Весь мир
                    </p>
                </div>
            </div>
            <Link
                href={'/groups'}
                className='fixed top-20 right-1 sm:right-6 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <p>Группы</p>
                <MoveRight size={20} />
            </Link>
            <Link
                href={'/topCountries'}
                className='absolute left-6 bottom-20 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <MoveLeft size={20} />
                <p>Топ страны</p>
            </Link>
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
