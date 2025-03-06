'use client'

import { motion, AnimatePresence, useCycle } from 'framer-motion'
import Link from 'next/link'

const navlinks = [
    { title: 'Вип Вакансии', href: '/vipVacancies', ava: '/images/ava/ava1.avif' },
    { title: 'Топ Страны', href: '/topCountries', ava: '/images/ava/ava2.avif' },
    { title: 'Весь Мир', href: '/locations', ava: '/images/ava/ava3.avif' },
    { title: 'Группы', href: '/groups', ava: '/images/ava/ava4.avif' },
    { title: 'Статьи', href: '/blogs', ava: '/images/ava/ava5.avif' },
]

export default function Header() {
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    return (
        <header className='fixed top-0 z-40 w-full flex items-center justify-between p-2'>
            <Link href={'/'}>
                <img
                    title='Сопрано Эскорт Лого'
                    src='/images/hero/logo.avif'
                    className='bg-black object-cover w-10 h-10 shadow-sm shadow-black/20 rounded-full'
                    alt='Сопрано Эскорт Лого'
                    width={40}
                    height={40}
                    loading='eager'
                    fetchPriority='high'
                />
            </Link>
            <div className='relative z-50 py-[12px] px-[10px] bg-black/70 backdrop-blur-sm shadow-sm shadow-black/20 rounded-full'>
                <motion.button
                    animate={mobileNav ? 'open' : 'closed'}
                    onClick={() => toggleMobileNav()}
                    className='flex flex-col space-y-1 cursor-pointer'
                >
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 6 },
                        }}
                        className='w-5 h-[2px] rounded-full bg-[#ff033a] block'
                    />
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        className='w-5 h-[2px] rounded-full bg-[#ff033a] block'
                    />
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -6 },
                        }}
                        className='w-5 h-[2px] rounded-full bg-[#ff033a] block'
                    />
                </motion.button>
            </div>
            <AnimatePresence>
                {mobileNav && (
                    <motion.div
                        key='mobile-nav'
                        variants={{
                            open: { x: '0%' },
                            closed: { x: '100%' },
                        }}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 40 },
                            opacity: { duration: 0.2 },
                        }}
                        className='fixed right-0 top-0 w-3/4 md:w-1/2 lg:w-1/3 z-40'
                    >
                        <div
                            onClick={() => toggleMobileNav()}
                            className='flex flex-col justify-center items-end sm:items-start gap-5 pr-4 sm:pl-3 h-screen w-full shadow-black shadow-2xl bg-black/80 backdrop-blur-md'
                        >
                            {navlinks.map(({ href, title, ava }) => {
                                return (
                                    <Link
                                        key={title}
                                        href={href}
                                        className='text-white font-bold hover:text-neutral-400 transition-all duration-300 sm:pl-6'
                                    >
                                        <div className='flex items-center gap-2 sm:gap-4 bg-black/50 py-1 px-2 rounded-full'>
                                            <img
                                                title='Navigation Avatar'
                                                src={ava}
                                                alt='Navigation Avatar'
                                                className='object-cover w-10 sm:w-14 h-10 sm:h-14 rounded-full'
                                                width={56}
                                                height={56}
                                                loading='eager'
                                                fetchPriority='high'
                                            />
                                            <p className='text-sm sm:text-lg font-normal tracking-widest pr-4'>
                                                {title}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
