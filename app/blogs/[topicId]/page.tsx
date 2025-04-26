import { getBlogTopic } from '@/sanity/sanity-utils'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = { params: Promise<{ topicId: string }> }

export async function generateMetadata(props: Props) {
    const params = await props.params
    const slug = params.topicId
    const data = await getBlogTopic(slug)
    return {
        title: data.categoryTitle,
        description: data.shortDescription,
        openGraph: {
            images: data.mobileImage,
            title: data.categoryTitle,
            description: data.shortDescription,
            url: data.slug,
            type: 'website'
        }
    }
}

export default async function Topic(props: Props) {
    const params = await props.params
    const slug = params.topicId
    const data = await getBlogTopic(slug)
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
                        srcSet={data.desktopImage}
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src={data.mobileImage}
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-[140px] uppercase drop-shadow-lg'>{data.categoryTitle}</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>{data.shortDescription}</h2>
                </article>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center mt-8 sm:mt-16'>
                {data.relatedBlogs?.map((blog: any, idx: any) => (
                    <div
                        key={idx}
                        className='relative w-5/6 sm:w-2/3 h-full flex flex-col justify-end items-center py-6 sm:py-12'
                    >
                        <picture>
                            <source
                                media='(min-width: 768px)'
                                srcSet={blog.desktopImageOne}
                            />
                            <img
                                title='Статьи на тему эскорта'
                                src={blog.mobileImageOne}
                                className='object-cover w-full h-full'
                                alt='Статьи на тему эскорта'
                                width={900}
                                height={500}
                                loading='lazy'
                                fetchPriority='high'
                            />
                        </picture>
                        <div className='w-5/6 absolute flex flex-col justify-center items-center gap-4 mb-4'>
                            <h3 className='text-white text-center text-3xl sm:text-7xl'>{blog.blogTitle}</h3>
                            <Link
                                href={`/blogs/blog/${blog.slug}`}
                                className='bg-[#ff033a] p-4 hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl w-full md:w-1/3'
                            >
                                <p className='text-md md:text-2xl font-normal text-white text-center'>
                                    Читать Cтатью
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[96%] md:w-3/4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] font-medium border-t-[1px] border-zinc-800 pb-2 md:pb-8'>
                Soprano Escort
            </div>
        </section>
    )
}
