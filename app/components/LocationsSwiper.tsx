'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function LocationsSwiper({ data }: any) {
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
                {data.map((location: any, idx: any) => (
                    <SwiperSlide key={idx}>
                        <div className='w-full h-full relative'>
                            <div className='absolute inset-0 md:hidden flex flex-col justify-center items-center'>
                                <Link
                                    href={`/locations/${location.slug}`}
                                    className='flex items-center rounded-full p-1 text-white gap-2'
                                >
                                    <div className='flex flex-col items-center gap-2 relative'>
                                        <div className='absolute flex items-center z-30 -top-8'>
                                            <img
                                                title='Фото локации'
                                                className='object-cover w-16 h-16 rounded-full bg-gradient-to-t from-purple-900 to-violet-400 p-[3px]'
                                                src={location.locationFlagImage}
                                                alt='Фото локации'
                                                width={64}
                                                height={64}
                                                fetchPriority='high'
                                                loading='eager'
                                            />
                                        </div>
                                        <div className='bg-gradient-to-r from-transparent via-black to-transparent flex items-center justify-around rounded-xl py-2 w-5/6 min-w-[220px] shadow-lg text-white'>
                                            <div className='flex flex-col items-center gap-2 px-2 pt-8'>
                                                <div className='flex items-center border-b-[1px] border-neutral-400'>
                                                    <h1 className='text-center text-2xl font-normal w-full textShadow'>
                                                        {location.locationTitle}
                                                    </h1>
                                                </div>
                                                <h2 className='textShadow font-normal text-md text-center'>
                                                    {location.locationSubTitle}
                                                </h2>
                                                <ChevronDown size={32} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='absolute w-full h-full left-0 bottom-0 md:top-0 hidden md:flex flex-col justify-center items-center md:items-start text-white md:pl-24'>
                                <div className='w-full md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center md:items-start text-center font-bold  md:text-start gap-4 mb-8 md:mb-0'>
                                    <h1 className='text-5xl md:text-8xl textShadow font-normal'>
                                        {location.locationTitle}
                                    </h1>
                                    <h2 className='text-2xl textShadow font-normal hidden md:block'>
                                        {location.locationSubTitle}
                                    </h2>
                                    <div className='w-3/4 xl:w-2/3 flex flex-col justify-start items-center gap-4'>
                                        <Link
                                            href={`/locations/${location.slug}`}
                                            className='bg-[#ff033a] px-6 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl'
                                        >
                                            <p className='flex flex-col items-center font-normal text-2xl'>
                                                Смотреть направление
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
                    {data.map((agency: any, idx: any) => (
                        <SwiperSlide key={idx}>
                            <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                                <div className='bg-gradient-to-t from-purple-900 to-violet-400 rounded-full p-[3px] relative'>
                                    <img
                                        title='Agency Thumb Avatar'
                                        className='object-cover w-20 h-20 rounded-full border-2 md:border-4 border-black md:h-32 md:w-32 shadow-lg'
                                        src={agency.thumbImage}
                                        alt='Agency Thumb Avatar'
                                        width={86}
                                        height={86}
                                        fetchPriority='high'
                                        loading='eager'
                                    />
                                    <div className='absolute inset-0 text-sm flex flex-col items-center justify-end pb-3'>
                                        <img
                                            title='Флаг направления'
                                            className='object-cover w-8 sm:w-10 h-4 sm:h-6 bg-black rounded-sm sm:rounded-md shadow-md'
                                            src={agency.locationFlagImage}
                                            alt='Флаг направления'
                                            width={32}
                                            height={32}
                                            fetchPriority='high'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center font-semibold text-sm md:text-lg text-white drop-shadow-md'>
                                    <p>{agency.locationTitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
