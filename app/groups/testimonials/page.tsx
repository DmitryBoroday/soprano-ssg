import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Testimonials() {
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
                    <h1 className='text-5xl 2xl:text-[180px] uppercase drop-shadow-lg'>ОТЗЫВЫ</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>Отзывы девушек о работе в эскорте с SOPRANO ESCORT</h2>
                </article>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/groups/testimonialsDesktop.avif'
                    />
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/testimonialsMobile.avif'
                        className='object-cover w-full h-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={1800}
                        height={1000}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
            </div>
            <div className='w-full px-2 sm:px-0 sm:w-2/3 h-full bg-black text-white flex flex-col items-center gap-2 pt-4 md:pt-12'>
                <p className='indent-4 sm:indent-8 font-normal text-md sm:text-2xl border-b-[1px] border-zinc-900 pb-4'>
                    Отзывы от девушек о работе в эскорте за границей свидетельствуют о
                    том, что это работа, которая может полностью изменить жизнь. Девушки
                    отмечают, что эта работа позволяет им раскрывать свою сексуальность,
                    становиться более уверенными и успешными. Они подчеркивают, что работа
                    в эскорте за границей является не только финансово выгодной, но и
                    уникальным опытом, который дает возможность путешествовать и
                    наслаждаться жизнью
                </p>
                <div className='flex flex-col gap-2 items-center text-md md:text-lg text-neutral-300 text-center py-4 border-b-[1px] border-zinc-900'>
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/ava1.avif'
                        className='object-cover w-14 h-14 rounded-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={14}
                        height={14}
                        loading='lazy'
                        fetchPriority='high'
                    />
                    <p className='text-xs'>Отзыв от Анны, 26 лет</p>
                    <p className='w-full md:w-2/3 indent-4 md:indent-8'>
                        "Когда я впервые задумалась о работе в эскорте, меня терзали сомнения, но случайно наткнувшись на сайт Soprano Escort , я увидела множество предложений о работе. Заинтригованная, я решилась попробовать! Моя первая поездка в тур была очень насыщенной и прибыльной.  Я никогда не зарабатывала столько денег до этого!  Я почувствовала в себе силы и желание быть самодостаточной!   Благодаря этой работе я обрела финансовую независимость и уверенность в себе"
                    </p>
                </div>
                <div className='flex flex-col gap-2 items-center text-md md:text-lg text-neutral-300 text-center py-4 border-b-[1px] border-zinc-900'>
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/ava2.avif'
                        className='object-cover w-14 h-14 rounded-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={14}
                        height={14}
                        loading='lazy'
                        fetchPriority='high'
                    />
                    <p className='text-xs'>Отзыв от Ольги, 30 лет</p>
                    <p className='w-full md:w-2/3 indent-4 md:indent-8'>
                        "Эскорт никогда не был моим планом, но судьба привела меня к этому через сайт Soprano Escort, на котором я увидела, что можно заработать в путешествии. Теперь я путешествую по Европе, встречаю удивительных людей и открываю для себя новые культуры.  В этом мне помогает Soprano Escort, который гарантирует мне работу  в любой стране.  Я так благодарна этому сайту за возможность, которая позволила мне изменить свою жизнь и стать уверенной в своих решениях"
                    </p>
                </div>
                <div className='flex flex-col gap-2 items-center text-md md:text-lg text-neutral-300 text-center py-4 border-b-[1px] border-zinc-900'>
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/ava3.avif'
                        className='object-cover w-14 h-14 rounded-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={14}
                        height={14}
                        loading='lazy'
                        fetchPriority='high'
                    />
                    <p className='text-xs'>Отзыв от Кати, 19 лет</p>
                    <p className='w-full md:w-2/3 indent-4 md:indent-8'>
                        "История моего вступления в мир эскорта началась, когда я наткнулась на сайт Soprano Escort с советами и историями успешных девушек. Я нашла этот сайт по поиску в Гугле и узнала, как правильно выбрать агентство и подготовиться к первому туру в другую страну. Первый раз мне было немного волнительно, потому что приходилось познавать новые вещи, то, что никогда до этого не делала и даже не думала об этом.
                        Сейчас с свободно езжу по разным странам и зарабатываю хорошие деньги!
                        Эта работа помогла мне не только заработать на учебу, но и открыть в себе уверенность, о которой я даже не подозревала"
                    </p>
                </div>
                <div className='flex flex-col gap-2 items-center text-md md:text-lg text-neutral-300 text-center py-4 border-b-[1px] border-zinc-900'>
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src='/images/groups/ava4.avif'
                        className='object-cover w-14 h-14 rounded-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={14}
                        height={14}
                        loading='lazy'
                        fetchPriority='high'
                    />
                    <p className='text-xs'>Отзыв от Виктории, 29 лет</p>
                    <p className='w-full md:w-2/3 indent-4 md:indent-8'>
                        "С этой сферой я была уже знакома, но, к сожалению, мне  довелось столкнуться с мошенниками. Я продолжала мониторить предложения и искала проверенные туры, которые действительно обеспечивали безопасные условия для работы. В итоге , я нашла себе хорошую работу  благодаря сайту Soprano Escort, где есть огромный выбор безопасных  туров и профессиональных менеджеров по всему миру!
                        Спасибо за то, что вы есть!"
                    </p>
                </div>
            </div>
            <div className='w-full h-full py-4 bg-black text-white flex flex-col items-center'>
                <h3 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] logo font-medium'>
                    Soprano Escort
                </h3>
            </div>
        </section>
    )
}
