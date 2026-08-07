

export default function Testimonials() {

    const testimonials = [
        {
            image: '/images/testimonials/testimonials1.jpg',
            avatar: '/images/testimonials/ava1.jpg',
            text: 'Все было замечательно, я не первый раз работала в Бельгии... Встречают, провожают, всегда на связи по любому вопросу. Проживание в шикарной квартире БЕСПЛАТНО, работа в радость одним словом!',
        },
        {
            image: '/images/testimonials/testimonials2.jpg',
            avatar: '/images/testimonials/ava2.jpg',
            text: 'Привет девочки! Сегодня прибыла во Францию. Встретил личный водитель он же охранник. Поселили в 5 звездах в центре города. Очень приятный менеджер, все показал и рассказал, познакомилась с девочками и жду уже начала работы',
        },
        {
            image: '/images/testimonials/testimonials3.jpg',
            avatar: '/images/testimonials/ava3.jpg',
            text: 'Девочки это Дубай! Давно хотела тут поработать, читала отзывы, что тут щедрые мужчины, но они соврали. Тут чересчур щедрые мужчины! Очень много допов и чая, хочу тут остаться подольше!',
        },
    ]

    return (
        <section
            className='bg-black w-full h-full flex flex-col justify-center items-center lg:py-48 py-24'
        >
            <div className='flex justify-center text-center w-full px-2 md:px-28 pt-16 sm:pt-12'>
                <p className='text-white text-4xl font-bold drop-shadow-lg'>
                    ОТЗЫВЫ ДЕВУШЕК
                </p>
            </div>
            <div className='px-2 sm:px-24 py-6 w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {testimonials.map((banner, idx) => (
                    <div
                        key={idx}
                        className='relative text-white shadow-2xl shadow-zinc-800'
                    >
                        <img
                            title='Testimonials Banner'
                            src={banner.image}
                            className='object-cover w-full h-full'
                            alt='Testimonials Banner'
                            width={500}
                            height={340}
                            loading='lazy'
                            fetchPriority='high'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-2 px-4 md:px-2 lg:px-24 h-full w-full'>
                            <img
                                title='Testimonials Avatar'
                                src={banner.avatar}
                                className='object-cover rounded-full w-16 h-16 border-2 border-lime-400'
                                alt='Testimonials Avatar'
                                width={64}
                                height={64}
                                loading='lazy'
                                fetchPriority='high'
                            />
                            <p className='indent-8 text-center text-sm 2xl:text-lg overflow-y-hidden text-gray-300 font-light'>
                                {banner.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
