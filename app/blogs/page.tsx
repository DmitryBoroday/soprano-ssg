import BottomNav from '../components/BottomNav';


export default function Blogs() {
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
                    src='/videos/blogs/mobile.mp4'
                    type='video/mp4'
                    media='(max-width:640px)'
                ></source>
                <source
                    src='/videos/blogs/desktop.mp4'
                    type='video/mp4'
                ></source>
            </video>
            <p className='absolute top-3 w-full flex flex-col items-center justify-center z-20 text-center font-[600] tracking-widest text-[#ff033a] text-xl sm:text-4xl logo logoShadow'>
                SOPRANO ESCORT
            </p>
            <div className='fixed top-16 sm:top-20 left-2 sm:left-6 flex items-center gap-2 z-30 py-1'>
                <img
                    className='object-cover w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-t from-rose-600 to-rose-400 p-[2px] rounded-full'
                    src='/images/ava/ava5.avif'
                    alt='flag'
                    fetchPriority='high'
                    loading='eager'
                />
                <p className='text-center text-white font-bold tracking-[2px] text-sm drop-shadow-md'>
                    Статьи
                </p>
            </div>
            <nav className='md:hidden flex justify-start w-full'>
                <BottomNav
                    titleLeft={'группы'}
                    linkLeft={'/groups'}
                    avaLeft={'/images/ava/ava4.avif'}
                    titleRight={'вип вакансии'}
                    linkRight={'/vipVacancies'}
                    avaRight={'/images/ava/ava1.avif'}
                />
            </nav>
        </section>
    )
}
