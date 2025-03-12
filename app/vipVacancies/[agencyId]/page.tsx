import Agency from '@/app/components/Agency'
import React from 'react'

const singleAgency =
{
    linkBack: '/vipVacancies',
    logoImg: '/images/vipVacancies/vip_.avif',
    thumbImg: '/images/vipVacancies/thumb.jpg',
    desktopImg: '/images/vipVacancies/desk.jpg',
    mobileImg: '/images/vipVacancies/mob.jpg',
    agencyTitle: 'h1 agency name',
    shortContent: 'h2 short text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id officiis eligendi, reiciendis quod commodi quas nulla a officia vel numquam',
    telegramLink: 'https://www.youtube.com/',
    whatsAppLink: 'https://www.youtube.com/',
    mainUrl: 'Soprano Country url',
    relatedFlags: [
        {
            flagImg: '/images/vipVacancies/uk.jpg',
            flagTitle: 'UK'
        },
        {
            flagImg: '/images/vipVacancies/usa.jpg',
            flagTitle: 'USA'
        },
        {
            flagImg: '/images/vipVacancies/japan.jpg',
            flagTitle: 'Japan'
        },
    ],
    conditionsBanner: 'Condition Banner 1',
    conditionItems: [
        {
            item: 'Condition item 1',
        },
        {
            item: 'Condition item 2',
        },
        {
            item: 'Condition item 3',
        },
        {
            item: 'Condition item 4',
        },
        {
            item: 'Condition item 5',
        },
    ],
    conditionsBannerTwo: 'Condition Banner 2',
    conditionItemsTwo: [
        {
            item: 'Condition item 1',
        },
        {
            item: 'Condition item 2',
        },
        {
            item: 'Condition item 3',
        },
        {
            item: 'Condition item 4',
        },
        {
            item: 'Condition item 5',
        },
    ],
    conditionsBannerThree: 'Condition Banner 3',
    conditionItemsThree: [
        {
            item: 'Condition item 1',
        },
        {
            item: 'Condition item 2',
        },
        {
            item: 'Condition item 3',
        },
        {
            item: 'Condition item 4',
        },
        {
            item: 'Condition item 5',
        },
    ],
}


export default function VipAgency() {
    return (
        <section className='relative'>
            <div className='absolute top-20 sm:top-24 right-2 sm:right-12 z-40'>
                <img
                    title='Вип лого'
                    className='object-cover w-16 sm:w-24'
                    src='/images/vipVacancies/vipSm.avif'
                    alt='Вип лого'
                    width={96}
                    height={96}
                    fetchPriority='high'
                    loading='eager'
                />
            </div>
            <Agency data={singleAgency} />
        </section>
    )
}
