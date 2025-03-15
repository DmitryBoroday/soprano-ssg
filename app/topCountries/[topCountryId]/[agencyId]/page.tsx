import { getAgency } from '@/sanity/sanity-utils'
import { ArrowRight, Phone, Send, Square } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Link from 'next/link'

type Props = { params: Promise<{ agencyId: string }> }

export default async function TopCountryAgency(props: Props) {
    const params = await props.params
    const slug = params.agencyId
    const data = await getAgency(slug)
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-full h-screen relative'>
                <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl textShadow'>
                    SOPRANO ESCORT
                </p>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 sm:w-1/2 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-9xl drop-shadow-lg mb-2'>{data.agencyName}</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none mb-2'>{data.shortContent}</h2>
                    <nav className='flex justify-center gap-12 sm:gap-24 text-white'>
                        <Link
                            href={data.telegramUrl}
                            className='p-4 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-sky-500 shadow-lg'
                        >
                            <Send size={28} />
                        </Link>
                        <Link
                            href={data.whatsappUrl}
                            className='p-4 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-green-600 shadow-lg'
                        >
                            <Phone size={28} />
                        </Link>
                    </nav>
                </article>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet={data.desktopImage}
                    />
                    <img
                        title='Отзывы девушек о работе в эскорте за границей'
                        src={data.mobileImage}
                        className='object-cover w-full h-full'
                        alt='Отзывы девушек о работе в эскорте за границей'
                        width={1800}
                        height={1000}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <div className='absolute left-2 sm:left-6 bottom-2 sm:bottom-4 flex items-center w-5/6'>
                    <div className='w-full h-full gap-2 flex items-center text-white font-bold rounded-full'>
                        <img
                            title='Втп агентство аватар'
                            src={data.thumbImage}
                            alt='Втп агентство аватар'
                            width={96}
                            height={96}
                            loading='lazy'
                            className='w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-t from-red-600 to-pink-400 p-[3px] object-cover rounded-full shadow-md'
                        />
                        <p className='text-sm sm:text-xl drop-shadow-md'>
                            {data.agencyName}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center py-6 sm:pt-24'>
                <article className='text-white pb-6 w-[98%] sm:w-3/4 text-center text-xl sm:text-3xl'>
                    <PortableText value={data.mainContent} />
                </article>
                <nav className='w-3/4 flex justify-center gap-12 sm:gap-24 text-white border-b-[1px] border-neutral-800 pb-6'>
                    <Link
                        href={data.telegramUrl}
                        className='p-4 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-sky-500 shadow-lg'
                    >
                        <Send size={28} />
                    </Link>
                    <Link
                        href={data.whatsappUrl}
                        className='p-4 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-green-600 shadow-lg'
                    >
                        <Phone size={28} />
                    </Link>
                </nav>
                <div className='text-white py-6 sm:py-12 w-[96%] sm:w-2/3 border-b-[1px] border-neutral-900'>
                    <p className='text-2xl sm:text-3xl mb-2'>{data.conditionsBanner}</p>
                    {data.conditionItems?.map((item: any, idx: any) => (
                        <p
                            key={idx}
                            className='flex items-center gap-2 text-md sm:text-xl'
                        >
                            <span>
                                <Square size={14} />
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='text-white pb-6 pt-2 sm:py-12 w-[96%] sm:w-2/3 border-b-[1px] border-neutral-900'>
                    <p className='text-2xl sm:text-3xl mb-2'>{data.conditionsBannerTwo}</p>
                    {data.conditionItemsTwo?.map((item: any, idx: any) => (
                        <p
                            key={idx}
                            className='flex items-center gap-2 text-md sm:text-xl'
                        >
                            <span>
                                <Square size={14} />
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='text-white pb-6 pt-2 sm:py-12 w-[96%] sm:w-2/3 border-b-[1px] border-neutral-900'>
                    <p className='text-2xl sm:text-3xl mb-2'>{data.conditionsBannerThree}</p>
                    {data.conditionItemsThree?.map((item: any, idx: any) => (
                        <p
                            key={idx}
                            className='flex items-center gap-2 text-md sm:text-xl'
                        >
                            <span>
                                <Square size={14} />
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <Link
                href={data.mainUrl}
                className='flex items-center justify-between rounded-full bg-gradient-to-r from-red-600 to-rose-500 w-5/6 sm:w-[420px] mx-auto mb-4 text-white font-normal p-[2px]'
            >
                <img
                    title='Button Avatar'
                    src={data.thumbImage}
                    alt='Button Avatar'
                    width={64}
                    height={64}
                    fetchPriority='high'
                    loading='lazy'
                    className='w-16 h-16 bg-gradient-to-t from-red-600 to-rose-400 p-[3px] object-cover rounded-full shadow-md '
                />
                <p className='text-md md:text-xl'>Перейти к вакансии</p>
                <ArrowRight size={32} />
            </Link>
            <p className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] font-medium text-center pb-6 sm:pb-12'>
                Soprano Escort
            </p>
        </section>
    )
}
