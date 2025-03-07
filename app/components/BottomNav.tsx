import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
    avaLeft: string,
    avaRight: string,
    titleLeft: string,
    titleRight: string,
    linkLeft: string,
    linkRight: string
}

export default function BottomNav({
    avaLeft,
    avaRight,
    titleLeft,
    titleRight,
    linkLeft,
    linkRight,
}: Props) {
    return (
        <nav className='w-full h-full bg-black text-neutral-400 mt-2 z-40'>
            <div className='flex items-center justify-start px-2 gap-2 text-xs font-bold tracking-widest'>
                <Link
                    href={linkLeft}
                    className='flex items-center border-[1px] border-zinc-700 rounded-full my-1 p-[2px]'
                >
                    <MoveLeft size={16} />
                    <p className='pr-2 pl-[4px]'>{titleLeft}</p>
                    <img
                        title='Navigation Avatar'
                        src={avaLeft}
                        alt='Navigation Avatar'
                        className='w-8 h-8 object-cover rounded-full'
                        width={32}
                        height={32}
                        fetchPriority='high'
                        loading='lazy'
                    />
                </Link>
                <Link
                    href={linkRight}
                    className='flex items-center border-[1px] border-zinc-700 rounded-full my-1 p-[2px]'
                >
                    <img
                        title='Navigation Avatar'
                        src={avaRight}
                        alt='Navigation Avatar'
                        className='w-8 h-8 object-cover rounded-full'
                        width={32}
                        height={32}
                        fetchPriority='high'
                        loading='lazy'
                    />
                    <p className='pl-2'>{titleRight}</p>
                    <MoveRight size={16} className='mx-[4px]' />
                </Link>
            </div>
        </nav>
    )
}
