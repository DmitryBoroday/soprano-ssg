import Link from 'next/link'
import BottomNav from '../components/BottomNav'
import { MoveLeft, MoveRight } from 'lucide-react'
import BlogSwiper from '../components/BlogSwiper'
import { getBlogTopics } from '@/sanity/sanity-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Тут собраны актуальные статьи по теме эскорта',
    description: 'Эскорт - индустрия является одной из сфер, где девушки могут найти легальную работу с высоким зароботком. Как выбрать агентство для работы в эскорте. Подготовка в твой первый тур - что необходимо знать',
    twitter: {
        card: 'summary_large_image'
    },
    openGraph: {
        title: 'Тут собраны актуальные статьи по теме эскорта',
        description: 'Эскорт - индустрия является одной из сфер, где девушки могут найти легальную работу с высоким зароботком. Как выбрать агентство для работы в эскорте. Подготовка в твой первый тур - что необходимо знать',
        url: 'https://www.sopranoescort.com/blogs',
        type: 'website'
    }
}

export default async function Blogs() {
    const data = await getBlogTopics()
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            {/* <Link href={'/blogs'} className='fixed top-28 sm:top-32 right-4 p-1 rounded-full z-30 flex items-center gap-2 bg-green-300'>
                <img
                    title='Статья дня'
                    className='object-cover w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-t from-rose-600 to-rose-400 p-[2px] rounded-full'
                    src={'img'}
                    alt='Статья дня'
                    fetchPriority='high'
                    loading='eager'
                />
                <p className='flex items-center'>Daily Title<span><ArrowRight /></span></p>
            </Link> */}
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
                <BlogSwiper data={data} />
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
