import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


export default function LocationsBanner() {
    return (
        <section className='w-full h-full bg-black flex flex-col justify-center items-center py-12'>
            <div className='text-white w-full md:w-5/6 h-full flex flex-col xl:flex-row justify-between items-center gap-6 md:gap-12'>
                <article className='w-full flex flex-col gap-2 xl:gap-4 text-center xl:text-start sm:w-2/3 xl:w-1/3 px-2 font-normal'>
                    <p className='text-sm'>SOPRANO ESCORT</p>
                    <p className='text-4xl sm:text-5xl font-medium'>
                        НАПРАВЛЕНИЯ
                    </p>
                    <p className='text-lg'>Высокооплачиваемая работа девушек в эскорте Европы, Азии, России, Америки, Африки и даже Австралии</p>
                    <nav className='w-5/6 hidden xl:block text-white'>
                        <Link
                            href='/locations'
                            className='bg-[#ff033a] px-2 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center'
                        >
                            <p>Выбрать направление</p>
                            <ChevronRight size={28} />
                        </Link>
                    </nav>
                </article>
                <div>
                    <picture>
                        <source
                            media='(min-width: 768px)'
                            srcSet='/images/banners/locationsDesk.avif'
                        />
                        <img
                            title='Whole World Banner'
                            src='/images/banners/locationsMob.avif'
                            className='object-cover w-full h-full'
                            alt='Whole World Banner'
                            width={1000}
                            height={600}
                            loading='lazy'
                            fetchPriority='high'
                        />
                    </picture>
                </div>
                <nav className='xl:hidden text-white font-bold'>
                    <Link
                        href='/locations'
                        className='bg-[#ff033a] px-6 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center font-bold'
                    >
                        <p>Выбрать направление</p>
                        <ChevronRight size={28} />
                    </Link>
                </nav>
            </div>
        </section>
    )
}
