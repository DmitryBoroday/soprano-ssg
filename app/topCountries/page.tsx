import React from 'react'
import BottomNav from '../components/BottomNav'
import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'
import TopCountriesSwiper from '../components/TopCountriesSwiper'
import { getTopCountries } from '@/sanity/sanity-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Вакансии в эскорте в топовых странах от Soprano Escort',
    description: 'Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей',
    twitter: {
        card: 'summary_large_image'
    },
    openGraph: {
        title: 'Вакансии в эскорте в топовых странах от Soprano Escort',
        description: 'Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей',
        url: 'https://www.sopranoescort.com/topCountries',
        type: 'website'
    }
}

export default async function TopCountries() {
    const data = await getTopCountries()
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
                        src='/videos/topCountries/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/topCountries/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <div className='absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-transparent to-transparent'></div>
                <TopCountriesSwiper data={data} />
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                    SOPRANO ESCORT
                </p>
                <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                    <img
                        title='Топ страны аватар'
                        className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-violet-600 to-sky-400 p-[2px] rounded-full'
                        src='/images/ava/ava2.avif'
                        alt='Топ страны аватар'
                        width={40}
                        height={40}
                        loading='lazy'
                    />
                    <p className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md'>
                        Топ страны
                    </p>
                </div>
            </div>
            <Link
                href={'/locations'}
                className='fixed top-20 right-1 sm:right-6 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <p>Весь мир</p>
                <MoveRight size={20} />
            </Link>
            <Link
                href={'/vipVacancies'}
                className='absolute left-6 bottom-20 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <MoveLeft size={20} />
                <p>Вип вакансии</p>
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
