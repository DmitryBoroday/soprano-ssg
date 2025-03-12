import BottomNav from '@/app/components/BottomNav';


export default function LocationCountries() {
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='relative w-full h-full'>
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
                        src='/videos/locationCountries/mobile.mp4'
                        type='video/mp4'
                        media='(max-width:640px)'
                    ></source>
                    <source
                        src='/videos/locationCountries/desktop.mp4'
                        type='video/mp4'
                    ></source>
                </video>
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
