import { ChevronRight } from 'lucide-react'
import Link from 'next/link'


export default function BlogBanner() {
    return (
        <section className='w-full h-full bg-black flex flex-col justify-center items-center py-24 lg:py-48'>
            <div className='text-white w-full md:w-5/6 h-full flex flex-col xl:flex-row justify-between items-center gap-6 md:gap-12'>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/banners/blogDesk.avif'
                    />
                    <img
                        title='Escort Blog Banner'
                        src='/images/banners/blogMob.avif'
                        className='object-cover w-full h-full bg-black'
                        alt='Escort Blog Banner'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <div className='w-full flex flex-col gap-2 xl:gap-4 text-center xl:text-start sm:w-2/3 xl:w-1/3 px-2 font-normal'>
                    <p className='text-sm'>SOPRANO ESCORT</p>
                    <p className='text-4xl sm:text-5xl'>БЛОГ</p>
                    <p className='text-lg lg:px-0 px-8'>Статьи на тему безопасности, поведения в туре, условиях и требованиях для девушек и многое другое</p>
                    <div className='w-full hidden xl:block text-white'>
                        <Link
                            href='/blogs'
                            className='bg-[#ff033a] px-2 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center'
                        >
                            <p className='pb-1 font-bold'>Смотреть наш блог</p>
                            <ChevronRight size={28} />
                        </Link>
                    </div>
                </div>
                <nav className='xl:hidden text-white'>
                    <Link
                        href='/blogs'
                        className='bg-[#ff033a] px-6 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center font-medium'
                    >
                        <p>Смотреть наш блог</p>
                        <ChevronRight size={28} />
                    </Link>
                </nav>
            </div>
        </section>
    )
}
