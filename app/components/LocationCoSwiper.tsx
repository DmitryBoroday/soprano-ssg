'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function LocationCoSwiper({ data }: any) {
    const [thumbsSwiper, setThumbsSwiper]: any = useState(null)
    return (
        <div className='absolute inset-0'>
            <Swiper
                loop={true}
                pagination={{
                    type: 'fraction',
                }}
                spaceBetween={1}
                navigation={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Thumbs, Pagination, Navigation]}
            >
                {data.relatedCountries?.map((country: any, idx: any) => (
                    <SwiperSlide
                        key={idx}
                        className='cursor-pointer'
                    >
                        <Link
                            href={country.link}
                        >
                            <div className='flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-transparent via-black to-transparent text-white rounded-3xl py-2 px-12 sm:px-48'>
                                <div className='flex items-center textShadow font-normal'>
                                    <h1 className='text-3xl md:text-6xl xl:text-7xl drop-shadow-md text-center'>
                                        {country.locationTitle}
                                    </h1>
                                </div>
                                <img
                                    src={country.flagImage}
                                    alt='ava_img'
                                    className='w-28 sm:w-32 h-28 sm:h-32 object-cover bg-gradient-to-t from-purple-900 to-violet-400 p-[3px] rounded-full shadow-lg'
                                />
                                <ChevronDown size={32} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute md:right-24 bottom-0 md:bottom-12 w-full md:w-1/2 xl:w-1/3 h-fit z-30 px-2'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={1}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className='thumbs w-full md:w-[560px] sm:w-[400px] h-fit cursor-pointer z-30 bottom-2 rounded-xl'
                >
                    {data.relatedCountries?.map((country: any, idx: any) => (
                        <SwiperSlide key={idx}>
                            <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                                <div className='bg-gradient-to-t from-purple-900 to-violet-400 rounded-full p-[3px] relative'>
                                    <img
                                        className='object-cover w-20 h-20 rounded-full border-2 md:border-4 border-black md:h-32 md:w-32 shadow-lg'
                                        src={country.thumbImage}
                                        alt='topCountry_img'
                                        fetchPriority='high'
                                        loading='eager'
                                    />
                                    <div className='absolute inset-0 text-sm flex flex-col items-center justify-end pb-2 sm:pb-3'>
                                        <img
                                            className='object-cover w-8 md:w-10 h-8 md:h-10 shadow-md rounded-full'
                                            src={country.flagImage}
                                            alt='topCountry_img'
                                            fetchPriority='high'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                <p className='text-center font-bold text-sm md:text-xl textShadow text-white'>
                                    {country.countryTitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
