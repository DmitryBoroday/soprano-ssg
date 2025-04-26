import { getBlog } from '@/sanity/sanity-utils'
import { PortableText } from 'next-sanity'

type Props = { params: Promise<{ blogId: string }> }

export async function generateMetadata(props: Props) {
    const params = await props.params
    const slug = params.blogId
    const blog = await getBlog(slug)
    return {
        title: blog.blogTitle,
        description: blog.mainContentOne,
        openGraph: {
            images: blog.desktopImageOne,
            title: blog.blogTitle,
            description: blog.mainContentOne,
            url: blog.slug,
            type: 'website'
        }
    }
}

export default async function Blog(props: Props) {
    const params = await props.params
    const slug = params.blogId
    const blog = await getBlog(slug)
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='absolute top-3 w-full text-center drop-shadow-md text-2xl font-bold uppercase text-[#ff033a]'>
                <p>SOPRANO ESCORT</p>
            </div>
            <div className='w-full h-screen'>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet={blog.desktopImageOne}
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src={blog.mobileImageOne}
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 mx-auto text-center textShadow'>
                    <h1 className='text-3xl 2xl:text-8xl uppercase drop-shadow-lg'>{blog.blogTitle}</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>{blog.shortContent}</h2>
                </article>
            </div>
            <article className='py-4 sm:py-12 w-full sm:w-2/3 h-full flex flex-col justify-center items-center gap-8 text-md md:text-2xl text-white indent-4 md:indent-8'>
                <h3 className='px-2 sm:px-0'><PortableText value={blog.mainContentOne} /></h3>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet={blog.desktopImageTwo}
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src={blog.mobileImageTwo}
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <h4 className='px-2 sm:px-0'><PortableText value={blog.mainContentTwo} /></h4>
            </article>
            <div className='w-[96%] md:w-3/4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] font-medium border-t-[1px] border-zinc-800 pb-2 md:pb-8'>
                Soprano Escort
            </div>
        </section>
    )
}
