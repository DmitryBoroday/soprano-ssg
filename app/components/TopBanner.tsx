import { ChevronRight } from 'lucide-react'
import Link from 'next/link'


export default function TopBanner() {
    return (
        <section className='w-full h-full bg-black flex flex-col justify-center items-center py-12 md:py-24'>
            <div className='text-white w-full md:w-5/6 h-full flex flex-col xl:flex-row justify-between items-center gap-6 md:gap-12'>
                <div>
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
                            src='/videos/topBanner/topVideoMob.mp4'
                            type='video/mp4'
                            media='(max-width:640px)'
                        ></source>
                        <source
                            src='/videos/topBanner/topVideoDesk.mp4'
                            type='video/mp4'
                        ></source>
                    </video>
                </div>
                <article className='w-full flex flex-col items-center sm:items-start gap-2 xl:gap-4 text-center xl:text-start sm:w-2/3 xl:w-1/3 px-2 text-white font-normal'>
                    <p className='text-sm'>SOPRANO ESCORT</p>
                    <p className='text-4xl sm:text-5xl'>ТОП СТРАНЫ</p>
                    <p className='text-lg'>Каждое эскорт-агентство проходит проверку на наличие в черном списке и отбираются только топовые, что бы предоставить самые лучшие условия работы девушек за границей</p>
                    <nav className='w-5/6 '>
                        <Link
                            href='/topCountries'
                            className='bg-[#ff033a] px-2 py-4 w-full hover:bg-[#c9002c] transition-all duration-300 shadow-lg text-xl flex justify-center items-center font-bold'
                        >
                            <p>Топ страны</p>
                            <ChevronRight size={28} />
                        </Link>
                    </nav>
                </article>
            </div>
        </section>
    )
}
