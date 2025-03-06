import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


export default function Hero() {
    return (
        <section className='w-full h-screen relative'>
            <picture className='w-full h-full'>
                <source
                    media='(min-width: 640px)'
                    srcSet='/images/hero/desktop.avif'
                />
                <img
                    title='Топ Эскорт - Работа в эскорте по всему миру'
                    src='/images/hero/mobile.avif'
                    className='bg-black object-cover w-full h-full shadow-sm shadow-black/40'
                    alt='Топ Эскорт - Работа в эскорте по всему миру'
                    width={400}
                    height={800}
                    loading='eager'
                    fetchPriority='high'
                />
            </picture>
            <div className='absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black via-transparent to-transparent'></div>
            <div className='absolute inset-0 flex flex-col  justify-end sm:justify-center items-center sm:items-start w-[92%] sm:w-5/6 mx-auto pb-24 sm:pb-0'>
                <article>
                    <h1 className='text-3xl sm:text-5xl text-white text-center sm:text-start uppercase font-bold sm:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h1>
                    <h2 className='text-lg sm:text-2xl text-white text-center sm:text-start sm:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit veritatis, atque aperiam id quod perspiciatis?</h2>
                </article>
                <Link
                    href={'/'}
                    className='flex items-end bg-[#ff033a] py-2 sm:py-4 px-4 sm:px-8 uppercase text-white font-bold mt-4 text-xl group hover:bg-[#c9002c] transition-all duration-300'
                >
                    <p className='group-hover:underline'>Ссылка куда то в топ</p><span className='pb-[1px]'><ChevronRight size={24} /></span>
                </Link>
            </div>
            <div className='absolute top-3 w-full text-center drop-shadow-md text-2xl font-bold uppercase text-[#ff033a]'>
                <p>SOPRANO ESCORT</p>
            </div>
        </section>
    )
}
