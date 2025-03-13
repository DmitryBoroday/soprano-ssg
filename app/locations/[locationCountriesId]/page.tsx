import BottomNav from '@/app/components/BottomNav';
import LocationCoSwiper from '@/app/components/LocationCoSwiper';

const data = {
    locationTitle: 'Japan',
    locationFlagImage: '/images/swiperData/flag4.jpg',
    relatedCountries: [
        {
            link: '/locations/1/1/',
            locationTitle: 'Country Title 1',
            thumbImage: '/images/swiperData/ava1.jpg',
            flagImage: '/images/swiperData/flag1.jpg'
        },
        {
            link: '/locations/1/1/',
            locationTitle: 'Country Title 2',
            thumbImage: '/images/swiperData/ava2.jpg',
            flagImage: '/images/swiperData/flag2.jpg'
        },
        {
            link: '/locations/1/1/',
            locationTitle: 'Country Title 3',
            thumbImage: '/images/swiperData/ava3.jpg',
            flagImage: '/images/swiperData/flag3.jpg'
        },
        {
            link: '/locations/1/1/',
            locationTitle: 'Country Title 4',
            thumbImage: '/images/swiperData/ava4.jpg',
            flagImage: '/images/swiperData/flag4.jpg'
        },
        {
            link: '/locations/1/1/',
            locationTitle: 'Country Title 5',
            thumbImage: '/images/swiperData/ava5.jpg',
            flagImage: '/images/swiperData/flag5.jpg'
        },
    ]
}


export default function LocationCountries() {
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
                    src='/videos/locationCountries/mobile.mp4'
                    type='video/mp4'
                    media='(max-width:640px)'
                ></source>
                <source
                    src='/videos/locationCountries/desktop.mp4'
                    type='video/mp4'
                ></source>
            </video>
            <LocationCoSwiper data={data} />
            <div className='fixed right-3 sm:right-5 top-16 sm:top-20 flex items-center gap-2 text-sm text-white font-bold tracking-[2px] drop-shadow-md'>
                <h1>{data.locationTitle}</h1>
                <img
                    className='object-cover w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-gradient-to-t from-purple-900 to-violet-400 p-[3px] shadow-lg'
                    src={data.locationFlagImage}
                    alt='flag'
                    fetchPriority='high'
                    loading='eager'
                />
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
