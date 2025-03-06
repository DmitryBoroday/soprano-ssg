'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'


export default function PurpleBanner() {
    return (
        <section className='w-full h-full bg-black flex flex-col justify-center items-center'>
            <div className='relative bg-gradient-to-r from-[#00f6fa] via-[#d135ff] to-[#7a02f2] w-full h-full py-6 flex flex-col justify-center items-center'>
                <Swiper
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className='w-full flex flex-col justify-center items-center'
                >
                    <SwiperSlide>
                        <article className='flex justify-center items-center text-white text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'>
                            <p className='drop-shadow-lg font-normal py-1'>
                                ПОЛУЧИТЕ НЕЗАБЫВАЕМЫЕ ВПЕЧАТЛЕНИЯ
                            </p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='flex justify-center items-center text-white text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'>
                            <p className='drop-shadow-lg font-normal py-1'>
                                ДОСТОЙНОЕ ФИНАНСОВОЕ ВОЗНАГРАЖДЕНИЕ
                            </p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='flex justify-center items-center text-white text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'>
                            <p className='drop-shadow-md font-normal py-1'>
                                СОЗДАЙТЕ УСПЕШНОЕ БУДУЩЕЕ
                            </p>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
