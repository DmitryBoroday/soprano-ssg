import BottomNav from '../components/BottomNav';


export default function VipVacancies() {
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
                    src='/videos/vipVacancies/mobile.mp4'
                    type='video/mp4'
                    media='(max-width:640px)'
                ></source>
                <source
                    src='/videos/vipVacancies/desktop.mp4'
                    type='video/mp4'
                ></source>
            </video>
            <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                SOPRANO ESCORT
            </p>
            <div className='fixed top-32 right-2 sm:right-12'>
                <img
                    title='Vip Escort Agencies'
                    className='object-cover w-24'
                    src='/images/vipVacancies/vip_.avif'
                    alt='Vip Escort Agencies'
                    width={56}
                    height={56}
                    fetchPriority='high'
                    loading='eager'
                />
            </div>
            <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                <img
                    title='Page Avatar'
                    className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-red-600 to-rose-400 p-[2px] rounded-full'
                    src='/images/ava/ava1.avif'
                    alt='Page Avatar'
                    width={40}
                    height={40}
                    fetchPriority='high'
                    loading='eager'
                />
                <p className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md upper'>
                    Вип вакансии
                </p>
            </div>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'статьи'}
                    linkLeft={'/blogs'}
                    avaLeft={'/images/ava/ava5.avif'}
                    titleRight={'топ страны'}
                    linkRight={'/topCountries'}
                    avaRight={'/images/ava/ava2.avif'}
                />
            </nav>
        </section>
    )
}
