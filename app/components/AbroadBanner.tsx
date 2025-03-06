import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function AbroadBanner() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='relative w-full h-screen text-white'>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/banners/abroadDesk.avif'
                    />
                    <img
                        title='How To Become An Escort Model Banner'
                        src='/images/banners/abroadMob.avif'
                        className='object-cover w-full h-full'
                        alt='How To Become An Escort Model Banner'
                        width={1800}
                        height={1000}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <article className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-center items-center'>
                    <div className='px-2 w-full h-full md:w-5/6 xl:w-1/2 flex flex-col justify-center items-center gap-2 md:gap-4 text-white font-normal'>
                        <p className='drop-shadow-md'>SOPRANO ESCORT</p>
                        <p className='text-2xl md:text-3xl xl:text-5xl text-center px-12 drop-shadow-md mb-2 md:mb-8'>
                            КАК СТАТЬ ЭСКОРТНИЦЕЙ И НАЧАТЬ РАБОТАТЬ ЗА ГРАНИЦЕЙ
                        </p>
                        <p className='indent-8 text-center text-lg xl:text-2xl drop-shadow-md'>
                            Работа в эскорте за границей позволяет девушкам строить свое будущее. Гибкий график работы и высокий уровень оплаты труда позволяют реализовывать различные финансовые планы и достигать личных и профессиональных целей
                        </p>
                        <Link
                            href='https://t.me/SopranoModeling/56'
                            className='bg-[#ff033a] px-2 py-4 w-5/6 md:w-1/2 hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center mt-4 md:mt-12 text-white'
                        >
                            <p className='text-center font-bold'>
                                Стань участником нашего тг канала
                            </p>
                            <ChevronRight size={28} />
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    )
}
