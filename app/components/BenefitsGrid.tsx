

export default function BenefitsGrid() {

    const benefitsGrid = [
        {
            title: 'СВОБОДНЫЙ ГРАФИК',
            text: 'Свободный график работы, что позволяет планировать свое время самостоятельно и сочетать работу с другими интересами или занятиями',
            image: '/images/benefitsGrid/freeTime.avif',
        },
        {
            title: 'БЕЗОПАСНОСТЬ',
            text: 'Девушки могут быть уверены в том, что их личные данные и информация о работе будут храниться в тайне',
            image: '/images/benefitsGrid/safety.avif',
        },
        {
            title: 'ПРИВАТНОСТЬ',
            text: 'Девушки могут быть уверены в том, что их личные данные и информация о работе будут храниться в тайне',
            image: '/images/benefitsGrid/privacy.avif',
        },
        {
            title: 'ПРОЖИВАНИЕ',
            text: 'Проживание за границей бесплатное, либо с очень хорошими условиями. Что позволяет наслаждаться прекрасными пейзажами и жизнью в других странах',
            image: '/images/benefitsGrid/living.avif',
        },
        {
            title: 'ОПЛАТА',
            text: 'Оплата в валюте, обеспечивает высокий уровень дохода и финансовую стабильность не привязанную к курсу рубля',
            image: '/images/benefitsGrid/payment.avif',
        },
        {
            title: 'ВЕСЬ МИР',
            text: 'Свободный график работы, что позволяет планировать свое время самостоятельно и сочетать работу с другими интересами или занятиями',
            image: '/images/benefitsGrid/world.avif',
        },
    ]

    return (
        <section className='bg-black w-full h-full flex flex-col justify-center items-center py-2 md:py-12 text-white'>
            <div className='flex flex-col items-center justify-center gap-2 w-full px-2 pb-8 font-bold'>
                <p>SOPRANO ESCORT</p>
                <p className='text-3xl font-medium drop-shadow-lg text-center px-4'>
                    ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ
                </p>
            </div>
            <div className='px-2 w-full md:w-5/6 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
                {benefitsGrid.map((card, idx) => (
                    <div
                        key={idx}
                        className='relative w-full h-[500px] shadow-lg shadow-black'
                    >
                        <img
                            title='Escort Industry Benefits Banner'
                            src={card.image}
                            className='object-cover w-full h-full'
                            alt='Escort Industry Benefits Banner'
                            width={500}
                            height={500}
                            loading='lazy'
                            fetchPriority='high'
                        />
                        <article className='absolute w-full h-full inset-0 flex flex-col gap-2 justify-center items-center font-bold px-12 md:px-24'>
                            <p className='text-center text-3xl md:text-4xl drop-shadow-md'>
                                {card.title}
                            </p>
                            <p className='text-lg text-center drop-shadow-md'>{card.text}</p>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
