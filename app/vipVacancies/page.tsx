import Link from 'next/link'
import BottomNav from '../components/BottomNav'
import MainSwiper from '../components/Swiper'
import { MoveLeft, MoveRight } from 'lucide-react'

const data = [
    {
        vipAgencyName: '1 Agency Name',
        shortContent: '1 Short Contect',
        thumbImage: '/images/swiperData/ava1.jpg',
        link: '/vipVacancies/1',
        btnText: 'Button Text'
    },
    {
        vipAgencyName: '2 Agency Name',
        shortContent: '2 Short Contect',
        thumbImage: '/images/swiperData/ava2.jpg',
        link: '/vipVacancies/2',
        btnText: 'Button Text'
    },
    {
        vipAgencyName: '3 Agency Name',
        shortContent: '3 Short Contect',
        thumbImage: '/images/swiperData/ava3.jpg',
        link: '/vipVacancies/3',
        btnText: 'Button Text'
    },
    {
        vipAgencyName: '4 Agency Name',
        shortContent: '4 Short Contect',
        thumbImage: '/images/swiperData/ava4.jpg',
        link: '/vipVacancies/4',
        btnText: 'Button Text'
    },
    {
        vipAgencyName: '5 Agency Name',
        shortContent: '5 Short Contect',
        thumbImage: '/images/swiperData/ava5.jpg',
        link: '/vipVacancies/5',
        btnText: 'Button Text'
    },
]

export default function VipVacancies() {
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
                        src='/videos/vipVacancies/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/vipVacancies/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <MainSwiper data={data} />
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                    SOPRANO ESCORT
                </p>
                <div className='fixed top-20 sm:top-32 right-2 sm:right-12'>
                    <img
                        title='Лого страницы'
                        className='object-cover w-16 sm:w-24'
                        src='/images/vipVacancies/vipSm.avif'
                        alt='Лого страницы'
                        width={56}
                        height={56}
                        fetchPriority='high'
                        loading='eager'
                    />
                </div>
                <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                    <img
                        title='Page Avatar'
                        className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-red-600 to-rose-400 p-[2px] rounded-full'
                        src='/images/ava/ava1.avif'
                        alt='Page Avatar'
                        width={40}
                        height={40}
                        fetchPriority='high'
                        loading='eager'
                    />
                    <p className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md upper'>
                        Вип вакансии
                    </p>
                </div>
            </div>
            <Link
                href={'/topCountries'}
                className='fixed top-20 right-1 sm:right-6 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <p>Топ страны</p>
                <MoveRight size={20} />
            </Link>
            <Link
                href={'/blogs'}
                className='absolute left-6 bottom-20 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <MoveLeft size={20} />
                <p>Статьи</p>
            </Link>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'статьи'}
                    linkLeft={'/blogs'}
                    avaLeft={'/images/ava/ava5.avif'}
                    titleRight={'топ страны'}
                    linkRight={'/topCountries'}
                    avaRight={'/images/ava/ava2.avif'}
                />
            </nav>
        </section>
    )
}
