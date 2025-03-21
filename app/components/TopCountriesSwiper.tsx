'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { ChevronDown } from 'lucide-react'

export default function TopCountriesSwiper({ data }: any) {
    const [thumbsSwiper, setThumbsSwiper]: any = useState(null)
    return (
        <div className='absolute inset-0'>
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Navigation]}
                className='w-full h-screen'
            >
                {data.map((country: any, idx: any) => (
                    <SwiperSlide key={idx}>
                        <div className='w-full h-full relative'>
                            <div className='absolute inset-0 md:hidden flex flex-col justify-center items-center px-2 bg-gradient-to-t from-black via-white/10 to-white/10'>
                                <Link
                                    href={`/topCountries/${country.slug}`}
                                    className='flex items-center rounded-full p-1 text-white gap-2'
                                >
                                    <div className='flex flex-col items-center gap-2 relative'>
                                        <div className='absolute flex items-center z-30 -top-8'>
                                            <img
                                                title='Флаг страны'
                                                className='object-cover w-16 h-16 rounded-full bg-gradient-to-t from-violet-600 to-sky-400 p-[3px]'
                                                src={country.flagImage}
                                                alt='Флаг страны'
                                                width={64}
                                                height={64}
                                                fetchPriority='high'
                                                loading='eager'
                                            />
                                        </div>
                                        <div className='bg-gradient-to-r from-transparent via-black to-transparent flex items-center justify-around rounded-xl py-2 w-5/6 min-w-[220px] shadow-lg text-white'>
                                            <div className='flex flex-col items-center gap-2 px-2 pt-8'>
                                                <div className='flex items-center border-b-[1px] border-neutral-400'>
                                                    <p className='text-center text-2xl font-normal w-full textShadow'>
                                                        {country.countryTitle}
                                                    </p>
                                                </div>
                                                <p className='textShadow font-normal text-md text-center'>
                                                    {country.subTitle}
                                                </p>
                                                <ChevronDown size={32} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='absolute w-full h-full left-0 bottom-0 md:top-0 hidden md:flex flex-col justify-center items-center md:items-start md:pl-24'>
                                <div className='w-3/4 md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center md:items-start text-center font-bold  md:text-start gap-2 sm:gap-4 mb-8 md:mb-0 text-white'>
                                    <div className='relative flex flex-col sm:flex-row items-center justify-center text-center'>
                                        <img
                                            title='Флаг страны'
                                            className='object-cover w-12 h-12 mb-1 rounded-full shadow-lg'
                                            src={country.flagImage}
                                            alt='Флаг страны'
                                            width={64}
                                            height={64}
                                            fetchPriority='high'
                                            loading='eager'
                                        />
                                        <h1 className='sm:pl-2 text-white font-normal text-md sm:text-2xl drop-shadow-md'>
                                            {country.countryTitle}
                                        </h1>
                                    </div>
                                    <h2 className='text-xl sm:text-5xl md:text-7xl drop-shadow-md font-normal'>
                                        {country.subTitle}
                                    </h2>
                                    <article className='text-md sm:text-2xl drop-shadow-md font-normal mx-2 sm:mx-0'>
                                        <PortableText value={country.shortDescription} />
                                    </article>
                                    <div className='w-[96%] xl:w-2/3 flex flex-col justify-start items-center gap-4'>
                                        <Link
                                            href={`/topCountries/${country.slug}`}
                                            className='bg-white/10 sm:bg-[#ff033a] px-2 sm:px-6 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl rounded-2xl sm:rounded-none'
                                        >
                                            <p className='text-center font-normal text-lg sm:text-2xl text-white'>
                                                Смотреть агентства
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute md:right-24 bottom-0 md:bottom-24 w-full md:w-1/2 xl:w-1/3 h-fit z-30'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={1}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className='thumbs w-full md:w-[560px] sm:w-[400px] h-fit cursor-pointer z-30'
                >
                    {data.map((country: any, idx: any) => (
                        <SwiperSlide key={idx}>
                            <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                                <div className='bg-gradient-to-t from-red-600 to-rose-400 rounded-full p-[3px] relative'>
                                    <img
                                        title='Agency Thumb Avatar'
                                        className='object-cover w-20 h-20 rounded-full border-2 md:border-4 border-black md:h-32 md:w-32 shadow-lg'
                                        src={country.thumbImage}
                                        alt='Agency Thumb Avatar'
                                        width={86}
                                        height={86}
                                        fetchPriority='high'
                                        loading='eager'
                                    />
                                    <div className='absolute inset-0 text-sm flex flex-col items-center justify-end pb-2 sm:pb-3'>
                                        <img
                                            title='inside img flag or ava'
                                            className='object-cover w-8 h-8 bg-black rounded-full shadow-md'
                                            src={country.flagImage}
                                            alt='inside img flag or ava'
                                            width={32}
                                            height={32}
                                            fetchPriority='high'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center font-semibold text-sm md:text-lg text-white drop-shadow-md'>
                                    <p>{country.countryTitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
