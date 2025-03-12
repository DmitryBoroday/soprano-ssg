'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, usePresence } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Info, X } from 'lucide-react'

function Box() {
    const ref = useRef(null)
    const [isPresent, safeToRemove] = usePresence()

    const btnContent = {
        title: 'btn title',
        link: 'https://t.me/sopranogroups',
        linkTitle: 'btn tg title',
        linkTwo: 'https://t.me/+SvfyRiO503JiYzFi',
        linkTwoTitle: 'btn chanel title',
    }

    useEffect(() => {
        if (!isPresent) {
            gsap.to(ref.current, {
                opacity: 0,
                onComplete: () => safeToRemove?.(),
            })
        }
    }, [isPresent, safeToRemove])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            className='fixed bottom-8 lg:bottom-12 right-[72px] lg:right-[80px] w-64 h-72 bg-gradient-to-r from-pink-500 to-purple-700 rounded-tl-xl rounded-tr-xl rounded-bl-xl z-50 flex flex-col justify-center items-center gap-4 p-4 text-center text-white'
            ref={ref}
        >
            <h1 className='text-xl drop-shadow font-bold'>{btnContent.title}</h1>
            <Link
                className='px-4 py-2 shadow-md shadow-pink-500 hover:shadow-pink-300 transition-all duration-300 rounded-2xl'
                href={btnContent.linkTwo}
            >
                {btnContent.linkTwoTitle}
            </Link>
            <Link
                className='px-4 py-2 shadow-md shadow-pink-500 hover:shadow-pink-300 transition-all duration-300 rounded-full'
                href={btnContent.link}
            >
                {btnContent.linkTitle}
            </Link>

            <p>SopranoGroups@gmail.com</p>
        </motion.div>
    )
}

export default function AnimatedBtn() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='text-2xl text-white fixed right-2 lg:right-6 bottom-8 lg:bottom-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 z-50 shadow-lg shadow-zinc-700'>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        setShow(!show)
                    }}
                    className='w-full h-full rounded-full flex items-center justify-center hover:text-violet-600'
                >
                    {show ? <X size={16} /> : <Info size={18} />}
                </motion.button>
            </div>
            <AnimatePresence>{show ? <Box /> : null}</AnimatePresence>
        </>
    )
}
