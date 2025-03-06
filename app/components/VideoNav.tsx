'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'

const data = [
    {
        desktopVideo: '/videos/videoNav/deskVip.mp4',
        verticalVideo: '/videos/videoNav/mobVip.mp4',
        avaImage: '/images/header/ava1.avif',
        title: 'ВИП ВАКАНСИИ',
        shortText: 'Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей',
        buttonText: 'Смотреть вакансии',
        link: '/vipVacancies',
    },
    {
        desktopVideo: '/videos/videoNav/deskTop.mp4',
        verticalVideo: '/videos/videoNav/mobTop.mp4',
        avaImage: '/images/header/ava2.avif',
        title: 'ТОП СТРАНЫ',
        shortText: 'Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей',
        buttonText: 'Топ страны',
        link: '/topCountries',
    },
    {
        desktopVideo: '/videos/videoNav/deskWorld.mp4',
        verticalVideo: '/videos/videoNav/mobWorld.mp4',
        avaImage: '/images/header/ava3.avif',
        title: 'НАПРАВЛЕНИЯ',
        shortText: 'Высокооплачиваемая работа девушек в эскорте Европы, Азии, России, Америки, Африки и даже Австралии',
        buttonText: 'Выбрать направление',
        link: '/locations',
    },
    {
        desktopVideo: '/videos/videoNav/deskGroup.mp4',
        verticalVideo: '/videos/videoNav/mobGroup.mp4',
        avaImage: '/images/header/ava4.avif',
        title: 'НАШИ ГРУППЫ',
        shortText: 'Станьте участницей наших групп, узнайте об условиях работы моделью и отзывах девушек',
        buttonText: 'Перейти в группы',
        link: '/groups',
    },
    {
        desktopVideo: '/videos/videoNav/deskBlog.mp4',
        verticalVideo: '/videos/videoNav/mobBlog.mp4',
        avaImage: '/images/header/ava5.avif',
        title: 'БЛОГ',
        shortText: 'Статьи на тему безопасности, поведения в туре, условиях и требованиях для девушек и многое другое',
        buttonText: 'Смотреть наш блог',
        link: '/blogs',
    },
]

export default function VideoNav() {
    return (
        <section className='w-full h-screen bg-black flex flex-col justify-center items-center'>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className='bg-black w-full h-screen'
            >
                {data.map((videoBanner, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='w-full h-full relative bg-black'>
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
                                    src={videoBanner.verticalVideo}
                                    type='video/mp4'
                                    media='(max-width:680px)'
                                ></source>
                                <source
                                    src={videoBanner.desktopVideo}
                                    type='video/mp4'
                                ></source>
                            </video>
                            <div className='absolute inset-0 w-full h-full flex flex-col justify-center items-center text-white font-normal'>
                                <div className='w-full md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center text-center gap-8 px-2'>
                                    <p className='px-4 text-4xl md:text-7xl xl:text-9xl drop-shadow-md font-[500]'>
                                        {videoBanner.title}
                                    </p>
                                    <p className='text-2xl drop-shadow-md hidden md:block'>
                                        {videoBanner.shortText}
                                    </p>
                                    <nav className='w-5/6 hidden md:flex flex-col mb-8 md:mb-0 justify-start items-center gap-4'>
                                        <Link
                                            href={videoBanner.link}
                                            className='bg-[#ff033a] px-2 py-4 md:py-6 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-md cursor-pointer flex justify-center items-center'
                                        >
                                            <p className='text-xl text-white md:text-2xl'>
                                                {videoBanner.buttonText}
                                            </p>
                                            <ChevronRight size={28} />
                                        </Link>
                                    </nav>
                                    <nav className='px-4 w-full h-full md:hidden flex flex-col justify-center items-center'>
                                        <Link
                                            href={videoBanner.link}
                                            className='flex flex-col items-center gap-2 relative font-bold shadow-lg bg-gradient-to-r from-transparent via-black to-transparent rounded-xl px-4 py-2'
                                        >
                                            <div className='absolute flex items-center z-30 -top-5 bg-white/10 backdrop-blur-md rounded-full shadow-lg'>
                                                <img
                                                    title='Soprano Escort Navigation Avatar'
                                                    className='object-cover w-12 h-12 rounded-full shadow-lg bg-gradient-to-t from-rose-600 to-pink-400 p-[2px]'
                                                    src={videoBanner.avaImage}
                                                    alt='Soprano Escort Navigation Avatar'
                                                    width={48}
                                                    height={48}
                                                    fetchPriority='high'
                                                    loading='eager'
                                                />
                                            </div>
                                            <div className='flex flex-col justify-center items-center pt-6'>
                                                <p className='text-lg text-center font-normal'>
                                                    {videoBanner.buttonText}
                                                </p>
                                                <ChevronDown size={32} />
                                            </div>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
