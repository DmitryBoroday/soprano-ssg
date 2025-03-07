import React from 'react'
import BottomNav from '../components/BottomNav'
import MainSwiper from '../components/Swiper'
import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'

const data = [
    {
        agencyName: '1 Agency Name',
        shortContent: '1 Short Contect',
        thumbImage: '/images/swiperData/ava1.jpg',
        innerImg: '/images/swiperData/flag1.jpg',
        link: '1 Link Url',
        btnText: 'Button Text'
    },
    {
        agencyName: '2 Agency Name',
        shortContent: '2 Short Contect',
        thumbImage: '/images/swiperData/ava2.jpg',
        innerImg: '/images/swiperData/flag2.jpg',
        link: '2 Link Url',
        btnText: 'Button Text'
    },
    {
        agencyName: '3 Agency Name',
        shortContent: '3 Short Contect',
        thumbImage: '/images/swiperData/ava3.jpg',
        innerImg: '/images/swiperData/flag3.jpg',
        link: '3 Link Url',
        btnText: 'Button Text'
    },
    {
        agencyName: '4 Agency Name',
        shortContent: '4 Short Contect',
        thumbImage: '/images/swiperData/ava4.jpg',
        innerImg: '/images/swiperData/flag4.jpg',
        link: '4 Link Url',
        btnText: 'Button Text'
    },
    {
        agencyName: '5 Agency Name',
        shortContent: '5 Short Contect',
        thumbImage: '/images/swiperData/ava5.jpg',
        innerImg: '/images/swiperData/flag5.jpg',
        link: '5 Link Url',
        btnText: 'Button Text'
    },
]


export default function TopCountries() {
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
                <MainSwiper data={data} />
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
