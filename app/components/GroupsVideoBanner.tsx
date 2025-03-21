import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


export default function GroupsVideoBanner() {
    return (
        <section
            id='groups-banner'
            className='w-full h-screen md:h-[700px] flex flex-col justify-center items-center'
        >
            <div className='w-full md:w-5/6 h-full md:h-5/6 overflow-hidden relative shadow-lg'>
                <video
                    className='bg-black w-full h-full object-cover'
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload='auto'
                    width='100%'
                    height='100%'
                >
                    <source
                        src='/videos/groupsBanner/mob.mp4'
                        type='video/mp4'
                        media='(max-width:680px)'
                    ></source>
                    <source
                        src='/videos/groupsBanner/desk.mp4'
                        type='video/mp4'
                    ></source>
                </video>
                <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent sm:to-black  flex flex-col justify-end md:justify-center items-center text-white pb-0 font-normal'>
                    <div className='w-5/6 md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center  text-center gap-6 md:gap-4 px-2'>
                        <p className='text-5xl md:text-7xl xl:text-8xl drop-shadow-md'>
                            НАШИ ГРУППЫ
                        </p>
                        <h2 className='text-lg drop-shadow-md'>Станьте участницей наших групп, узнайте об условиях работы моделью и отзывах девушек</h2>
                        <nav className='w-full flex flex-col mb-8 md:mb-0 justify-start items-center gap-4 text-white'>
                            <Link
                                href='/groups'
                                className='bg-[#ff033a] px-2 py-4 md:py-6 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-md cursor-pointer flex justify-center items-center'
                            >
                                <h3 className='text-xl md:text-2xl pb-1'>Перейти в группы</h3>
                                <ChevronRight size={28} />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
