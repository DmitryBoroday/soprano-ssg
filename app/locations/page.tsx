import React from 'react'
import BottomNav from '../components/BottomNav'

export default function Locations() {
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center relative'>
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
                    src='/videos/locations/mobile.mp4'
                    type='video/mp4'
                    media='(max-width:640px)'
                ></source>
                <source
                    src='/videos/locations/desktop.mp4'
                    type='video/mp4'
                ></source>
            </video>
            <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                SOPRANO ESCORT
            </p>
            <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                <img
                    className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-purple-900 to-violet-400 p-[2px] rounded-full'
                    src='/images/ava/ava3.avif'
                    alt='flag'
                    fetchPriority='high'
                    loading='eager'
                />
                <h1 className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md'>
                    Весь мир
                </h1>
            </div>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'топ страны'}
                    linkLeft={'/topCountries'}
                    avaLeft={'/images/ava/ava2.avif'}
                    titleRight={'группы'}
                    linkRight={'/groups'}
                    avaRight={'/images/ava/ava4.avif'}
                />
            </nav>
        </section>
    )
}
