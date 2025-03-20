import Link from 'next/link';


export default function Footer() {
    return (
        <footer className='w-full h-full flex flex-col justify-center items-center pt-12'>
            <div className='flex flex-col justify-center items-center gap-12 sm:gap-4 w-3/4 pb-12'>
                <p className='text-[#ff033a] text-4xl sm:text-6xl  text-center logo'>
                    SOPRANO ESCORT
                </p>
            </div>
            <div className='py-2 w-full sm:w-2/3 text-center border-t-[1px] border-neutral-800'>
                <p className='text-neutral-500 font-bold text-xs text-center'>
                    <span className='text-neutral-400 font-bold text-sm pr-2'>
                        Soprano Escort
                    </span>
                    не предоставляет услуги интимного характера. Все представленные вакансии, текст и изображения являются собственностью работодателя. Только для девушек от 18 лет. Сопровождение для мужчин без интима
                </p>
            </div>
            <div className='text-[8px] text-white border-t-[1px] border-neutral-800 py-2'>
                <p>Site created by <span><Link target='blank' href={'https://ssg-bio.vercel.app/'}>Digital Orca</Link></span> @ 2024</p>
            </div>
        </footer>
    )
}
