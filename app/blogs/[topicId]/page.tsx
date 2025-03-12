import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        title: 'Blog1',
        deskImg: '/images/blogsDummy/blog1Desk.jpg',
        mobImg: '/images/blogsDummy/blog1Mob.jpg',
        btnText: 'Читать Статью'
    },
    {
        title: 'Blog2',
        deskImg: '/images/blogsDummy/blog2Desk.jpg',
        mobImg: '/images/blogsDummy/blog2Mob.jpg',
        btnText: 'Читать Статью'
    },
    {
        title: 'Blog3',
        deskImg: '/images/blogsDummy/blog3Desk.jpg',
        mobImg: '/images/blogsDummy/blog3Mob.jpg',
        btnText: 'Читать Статью'
    },
]

export default function Topic() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='absolute top-3 w-full text-center drop-shadow-md text-2xl font-bold uppercase text-[#ff033a]'>
                <p>SOPRANO ESCORT</p>
            </div>
            <Link
                href='/blogs'
                className='fixed top-16 sm:top-20 left-2 sm:left-3 rounded-full bg-black/70 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white z-30 p-1'
            >
                <MoveLeft size={22} />
            </Link>
            <div className='w-full h-screen relative'>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/blogsDummy/desktop.jpg'
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src='/images/blogsDummy/mobile.jpg'
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 sm:w-1/2 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-[180px] uppercase drop-shadow-lg'>D h1 topic Title</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>Dynamic h2 content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quo?</h2>
                </article>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                {data.map((card: any, idx: any) => (
                    <div
                        key={idx}
                        className='relative w-5/6 sm:w-2/3 h-full flex flex-col justify-end items-center py-12'
                    >
                        <picture>
                            <source
                                media='(min-width: 768px)'
                                srcSet={card.deskImg}
                            />
                            <img
                                title='Статьи на тему эскорта'
                                src={card.mobImg}
                                className='object-cover w-full h-full'
                                alt='Статьи на тему эскорта'
                                width={600}
                                height={340}
                                loading='lazy'
                                fetchPriority='high'
                            />
                        </picture>
                        <div className='w-5/6 md:w-1/3 absolute flex flex-col justify-center items-center gap-4 mb-4'>
                            <h3 className='text-white text-3xl'>{card.title}</h3>
                            <Link
                                href={'/blogs/1/blog'}
                                className='bg-[#ff033a] px-2 py-4 hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl w-full'
                            >
                                <p className='text-md md:text-2xl font-normal text-white text-center'>
                                    Читать Cтатью
                                </p>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
