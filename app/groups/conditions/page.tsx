import { MoveLeft } from 'lucide-react'
import Link from 'next/link'


export default function page() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <Link
                href='/groups'
                className='fixed top-16 sm:top-20 left-2 sm:left-3 rounded-full bg-black/70 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white z-30 p-1'
            >
                <MoveLeft size={22} />
            </Link>
            <div className='w-full h-screen relative'>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 sm:w-1/2 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-[180px] uppercase drop-shadow-lg'>УСЛОВИЯ</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>Условия работы в эскорте за границей</h2>
                </article>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/groups/conditionsDesktop.avif'
                    />
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/conditionsMobile.avif'
                        className='object-cover w-full h-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={1800}
                        height={1000}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
            </div>
            <div className='w-full px-2 sm:px-0 sm:w-2/3 h-full bg-black flex flex-col items-center gap-2 font-normal text-white text-md sm:text-2xl indent-4 sm:indent-8 pt-4 md:pt-12'>
                <p className=''>
                    Каждое эскорт-агентства проходит проверку на наличие в черном списке и
                    отбираются только топовые, что бы предоставить самые лучшие условия
                    работы девушек за границей
                </p>
                <p className=' border-b-[1px] border-zinc-900 py-4'>
                    Свободный график работы, что позволяет планировать свое время
                    самостоятельно и сочетать работу с другими интересами или занятиями.
                    Оплата в валюте, обеспечивает высокий уровень дохода и финансовую
                    стабильность не привязанную к курсу рубля. Обеспечение безопасности –
                    серьезные эскорт-агентства заботятся о своих сотрудницах и
                    обеспечивают им безопасность во время работы. Проживание за границей
                    бесплатное, либо с очень хорошими условиями. Что позволяет
                    наслаждаться прекрасными пейзажами и жизнью в других странах.
                    Конфиденциальность – девушки могут быть уверены в том, что их личные
                    данные и информация о работе будут храниться в тайне. Доступность
                    всего мира – работая в эскорте за границей, девушки получают
                    возможность увидеть разные страны и путешествовать по всему миру!
                </p>
            </div>
            <div className='w-full h-full py-4 bg-black text-white flex flex-col items-center'>
                <h3 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] logo font-medium'>
                    Soprano Escort
                </h3>
            </div>
        </section>
    )
}
