import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function VipBanner() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center py-24 lg:py-48'>
            <div className='text-white font-normal w-full md:w-5/6 h-full flex flex-col xl:flex-row justify-between items-center gap-6 md:gap-12'>
                <article className='w-full flex flex-col gap-2 xl:gap-4 text-center xl:text-start sm:w-2/3 xl:w-1/3 px-2'>
                    <p className='text-sm'>SOPRANO ESCORT</p>
                    <p className='text-4xl sm:text-5xl'>ВИП ВАКАНСИИ</p>
                    <p className='lg:px-0 px-8'>Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей</p>
                    <div className='w-full hidden xl:block'>
                        <Link
                            href='/vipVacancies'
                            className='bg-[#ff033a] px-2 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center text-white'
                        >
                            <p className='pb-1 font-bold'>Смотреть вакансии</p>
                            <ChevronRight size={28} />
                        </Link>
                    </div>
                </article>
                <div>
                    <picture>
                        <source
                            media='(min-width: 640px)'
                            srcSet='/images/banners/deskVip.avif'
                        />
                        <img
                            title='Vip Vacancies Banner'
                            src='/images/banners/mobVip.avif'
                            className='object-cover w-full h-full'
                            alt='Vip Vacancies Banner'
                            width={1000}
                            height={500}
                            loading='lazy'
                            fetchPriority='high'
                        />
                    </picture>
                </div>
                <div className='xl:hidden font-bold text-white'>
                    <Link
                        href='/vipVacancies'
                        className='bg-[#ff033a] px-6 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center'
                    >
                        <p className='pb-1'>Смотреть вакансии</p>
                        <ChevronRight size={28} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
