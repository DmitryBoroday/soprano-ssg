import { MoveLeft } from 'lucide-react'
import Link from 'next/link'


export default function Admin() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <Link
                href='/groups'
                className='fixed top-16 sm:top-20 left-2 sm:left-3 rounded-full bg-black/70 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white z-30 p-1'
            >
                <MoveLeft size={22} />
            </Link>
            <div className='w-full h-screen relative'>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 sm:w-1/2 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-[180px] uppercase drop-shadow-lg'>ГРУППЫ</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>Станьте участницей наших групп, узнайте об условиях работы моделью и отзывах девушек</h2>
                </article>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/groups/groupsDesktop.avif'
                    />
                    <img
                        title='Сопрано Группы'
                        src='/images/groups/groupsMobile.avif'
                        className='object-cover w-full h-full'
                        alt='Сопрано Группы'
                        width={1800}
                        height={1000}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
            </div>
            <div className='w-full px-2 sm:px-0 sm:w-2/3 h-full flex flex-col items-center justify-center gap-2 font-normal text-white text-md sm:text-2xl text-start  pt-4 md:pt-12'>
                <p className='py-4 indent-4 sm:indent-8'>
                    Работа моделью - это эффективный способ заработать деньги быстро и без
                    проблем. Средний доход модели новой формации составляет 5000$ в
                    неделю. Поэтому, это самая высокооплачиваемая работа для девушек из
                    всех существующих вариантов. SOPRANO ESCORT является международным
                    агентством по набору персонала. Мы обеспечиваем работу для девушек по
                    всему Миру и предлагаем работу премиум класса. Работая с нами, вы
                    можете легко накопить на квартиру или дорогую машину, оплатить свое
                    обучение или финансово помочь своим близким. Найти подходящую работу
                    вы можете на этом сайте, а также в следующих telegram группах и
                    каналах:
                </p>
                <p className='font-bold text-white hover:text-red-600 transition-all duration-300 border-b-2'>
                    <Link href={'https://t.me/SopranoModeling/56'}>
                        Канал SOPRANO MODELING
                    </Link>
                </p>
                <p className='pb-4 indent-4 sm:indent-8'>
                    В этом канале публикуются объявления о высокооплачиваемой работе для
                    девушек в России, Украине и по всему Миру. Объявления выкладываются
                    один раз в месяц. Есть удобная навигация по странам и работодателям
                </p>
                <p className='font-bold text-white hover:text-red-600 transition-all duration-300 border-b-2'>
                    <Link href={'https://t.me/+C7MJfC046UY1MzQy'}>
                        Канал SOPRANO MODELLING VIP
                    </Link>
                </p>
                <p className='pb-4 indent-4 sm:indent-8'>
                    На канале показаны объявления обеспеченных мужчин в поисках девушек
                    для сопровождения, объявления по набору в туры в различные страны, а
                    также интересные статьи о работе в эскорте, о сексе и соблазнении
                    мужчин. Есть удобная навигация по странам и работодателям
                </p>
                <p className='font-bold text-white hover:text-red-600 transition-all duration-300 border-b-2'>
                    <Link href={'https://t.me/+T5HMRBxIRs82NmM6'}>
                        Группа SOPRANO RENDEZ-VOUS
                    </Link>
                </p>
                <p className='pb-4 indent-4 sm:indent-8'>
                    В данной группе вы найдете объявления о наборе в туры по всему миру,
                    объявления богатых мужчин, которые желают найти девушку для
                    сопровождения и содержания. Идет набор на различные тусовки и
                    кастинги. Объявления даются несколько раз в сутки
                </p>
                <p className='font-bold text-white hover:text-red-600 transition-all duration-300 border-b-2'>
                    <Link href={'https://t.me/+wooOqfoKWSAwMWJl'}>
                        Группа SOPRANO TRAVEL
                    </Link>
                </p>
                <p className='pb-4 indent-4 sm:indent-8'>
                    Самая многочисленная группа. В ней даются объявления о работе по всему
                    Миру от различных работодателей. Объявления даются несколько раз в
                    сутки
                </p>
                <p className='px-2 pb-4 font-semibold indent-0 text-center border-b-[1px] border-zinc-900'>
                    РАБОТА С НАМИ – ЭТО ПРЯМОЙ ПУТЬ К ВАШЕМУ БЛАГОСОСТОЯНИЮ И ФИНАНСОВОЙ
                    НЕЗАВИСИМОСТИ
                </p>
            </div>
            <div className='w-full h-full py-4 bg-black text-white flex flex-col items-center'>
                <h3 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] logo font-medium'>
                    Soprano Escort
                </h3>
            </div>
        </section>
    )
}
