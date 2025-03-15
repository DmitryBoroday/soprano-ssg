import React from 'react'
import BottomNav from '../components/BottomNav'
import Link from 'next/link'
import { MoveLeft, MoveRight } from 'lucide-react'
import GroupsSwiper from '../components/GroupsSwiper'

const data = [
    {
        title: 'Группы',
        shortContent: 'Высокооплачиваемая работа моделью от агентства SOPRANO ESCORT',
        thumbImage: '/images/swiperData/ava1.jpg',
        innerImg: '/images/swiperData/flag1.jpg',
        link: '/groups/admin',
        btnText: 'Перейти в группы'
    },
    {
        title: 'Отзывы',
        shortContent: 'Отзывы девушек от работы в эскорте за границей',
        thumbImage: '/images/swiperData/ava2.jpg',
        innerImg: '/images/swiperData/flag2.jpg',
        link: '/groups/testimonials',
        btnText: 'Смотреть отзывы'
    },
    {
        title: 'Условия',
        shortContent: 'Условия работы девушек в эскорте за границей',
        thumbImage: '/images/swiperData/ava3.jpg',
        innerImg: '/images/swiperData/flag3.jpg',
        link: '/groups/conditions',
        btnText: 'Изучить условия'
    },
]

export default function Groups() {
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
                        src='/videos/groups/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/groups/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <GroupsSwiper data={data} />
                {/* <MainSwiper data={data} /> */}
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                    SOPRANO ESCORT
                </p>
                <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                    <img
                        className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-purple-600 to-pink-500 p-[2px] rounded-full'
                        src='/images/ava/ava4.avif'
                        alt='flag'
                        fetchPriority='high'
                        loading='eager'
                    />
                    <h1 className='text-center text-white tracking-[2px] text-sm font-bold drop-shadow-md'>
                        Группы
                    </h1>
                </div>
            </div>
            <Link
                href={'/blogs'}
                className='fixed top-20 right-1 sm:right-6 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <p>Статьи</p>
                <MoveRight size={20} />
            </Link>
            <Link
                href={'/locations'}
                className='absolute left-6 bottom-20 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <MoveLeft size={20} />
                <p>Весь мир</p>
            </Link>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'весь мир'}
                    linkLeft={'/locations'}
                    avaLeft={'/images/ava/ava3.avif'}
                    titleRight={'статьи'}
                    linkRight={'/blogs'}
                    avaRight={'/images/ava/ava5.avif'}
                />
            </nav>
        </section>
    )
}
