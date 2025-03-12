import Agency from '@/app/components/Agency'

const singleAgency =
{
    linkBack: '/vipVacancies',
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


export default function TopCountryAgency() {
    return (
        <section>
            <Agency data={singleAgency} />
        </section>
    )
}
