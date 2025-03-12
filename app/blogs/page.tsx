import Link from 'next/link'
import BottomNav from '../components/BottomNav'
import MainSwiper from '../components/Swiper'
import { MoveLeft, MoveRight } from 'lucide-react'

const data = [
    {
        agencyName: '1 Agency Name',
        shortContent: '1 Short Contect',
        thumbImage: '/images/swiperData/ava1.jpg',
        innerImg: '/images/swiperData/flag1.jpg',
        link: '/blogs/1',
        btnText: 'Button Text'
    },
    {
        agencyName: '2 Agency Name',
        shortContent: '2 Short Contect',
        thumbImage: '/images/swiperData/ava2.jpg',
        innerImg: '/images/swiperData/flag2.jpg',
        link: '/blogs/2',
        btnText: 'Button Text'
    },
    {
        agencyName: '3 Agency Name',
        shortContent: '3 Short Contect',
        thumbImage: '/images/swiperData/ava3.jpg',
        innerImg: '/images/swiperData/flag3.jpg',
        link: '/blogs/3',
        btnText: 'Button Text'
    },
    {
        agencyName: '4 Agency Name',
        shortContent: '4 Short Contect',
        thumbImage: '/images/swiperData/ava4.jpg',
        innerImg: '/images/swiperData/flag4.jpg',
        link: '/blogs/4',
        btnText: 'Button Text'
    },
    {
        agencyName: '5 Agency Name',
        shortContent: '5 Short Contect',
        thumbImage: '/images/swiperData/ava5.jpg',
        innerImg: '/images/swiperData/flag5.jpg',
        link: '/blogs/5',
        btnText: 'Button Text'
    },
]


export default function Blogs() {
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
                        src='/videos/blogs/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/blogs/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <MainSwiper data={data} />
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                    SOPRANO ESCORT
                </p>
                <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                    <img
                        className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-rose-600 to-rose-400 p-[2px] rounded-full'
                        src='/images/ava/ava5.avif'
                        alt='flag'
                        fetchPriority='high'
                        loading='eager'
                    />
                    <p className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md'>
                        Статьи
                    </p>
                </div>
            </div>
            <Link
                href={'/vipVacancies'}
                className='fixed top-20 right-1 sm:right-6 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <p>Вип вакансии</p>
                <MoveRight size={20} />
            </Link>
            <Link
                href={'/groups'}
                className='absolute left-6 bottom-20 hidden md:flex items-center gap-1 z-30 text-white font-bold transition-all duration-300 hover:text-neutral-400'
            >
                <MoveLeft size={20} />
                <p>Группы</p>
            </Link>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'группы'}
                    linkLeft={'/groups'}
                    avaLeft={'/images/ava/ava4.avif'}
                    titleRight={'вип вакансии'}
                    linkRight={'/vipVacancies'}
                    avaRight={'/images/ava/ava1.avif'}
                />
            </nav>
        </section>
    )
}
