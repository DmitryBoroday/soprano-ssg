import { MoveLeft } from 'lucide-react';
import Link from 'next/link';


export default function Blog() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='absolute top-3 w-full text-center drop-shadow-md text-2xl font-bold uppercase text-[#ff033a]'>
                <p>SOPRANO ESCORT</p>
            </div>
            <Link
                href='/blogs/1'
                className='fixed top-16 sm:top-20 left-2 sm:left-3 rounded-full bg-black/70 backdrop-blur-sm shadow-lg text-gray-300 hover:text-white z-30 p-1'
            >
                <MoveLeft size={22} />
            </Link>
            <div className='w-full h-screen'>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/blogsDummy/blog2Desk.jpg'
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src='/images/blogsDummy/blog2Mob.jpg'
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <article className='absolute inset-0 flex flex-col justify-center items-center gap-2 text-white w-5/6 sm:w-1/2 mx-auto text-center textShadow'>
                    <h1 className='text-5xl 2xl:text-[180px] uppercase drop-shadow-lg'>D h1 blog Title</h1>
                    <h2 className='text-lg font-semibold sm:text-3xl drop-shadow-md leading-tight sm:leading-none'>Dynamic h2 blog content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quo?</h2>
                </article>
            </div>
            <article className='py-4 sm:py-12 w-full sm:w-2/3 h-full flex flex-col justify-center items-center gap-8 text-md md:text-2xl text-white indent-4 md:indent-8'>
                <h3 className='px-2 sm:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima numquam, optio nostrum voluptate in architecto saepe qui obcaecati id magni nisi eum magnam natus mollitia. Dolorem unde dicta est eligendi enim provident a ipsa sit assumenda molestiae quod dolores libero praesentium ducimus autem odit rem illo asperiores, accusantium nam impedit atque earum, eveniet esse. Fugit sunt atque ipsam magnam commodi fuga iure debitis eligendi accusantium, eius necessitatibus officia totam dolorum earum labore, amet aliquid suscipit accusamus. Repellat at amet distinctio praesentium explicabo deleniti aperiam dolore quam, mollitia tempora enim necessitatibus culpa quaerat quae quibusdam iste. Non nesciunt temporibus amet?</h3>
                <picture>
                    <source
                        media='(min-width: 768px)'
                        srcSet='/images/blogsDummy/blog1Desk.jpg'
                    />
                    <img
                        title='Статьи на тему эскорта'
                        src='/images/blogsDummy/blog1Mob.jpg'
                        className='object-cover w-full h-full bg-black'
                        alt='Статьи на тему эскорта'
                        width={600}
                        height={340}
                        loading='lazy'
                        fetchPriority='high'
                    />
                </picture>
                <p className='px-2 sm:px-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam vel quos sint quae cumque architecto tempora totam recusandae eius, magnam officia obcaecati rerum, repudiandae veniam qui assumenda dolore! Id quae amet, voluptate obcaecati adipisci ipsum, mollitia ducimus ab minus inventore perferendis nesciunt reiciendis, rerum quidem. Incidunt eum eligendi quod nostrum asperiores nesciunt labore quae, qui delectus corporis. Sunt obcaecati error eligendi maxime. Atque architecto, nihil illum aperiam quis quos doloremque distinctio reiciendis consequuntur officia numquam officiis magni, odio optio fugit beatae suscipit eos ex quia perferendis voluptates ratione expedita a saepe! Doloremque repellendus deleniti numquam debitis aliquam minima, tenetur, reiciendis perferendis excepturi iusto ratione quia odio a quaerat. Ratione itaque dignissimos quaerat maiores aspernatur eos, minus voluptatem repudiandae suscipit ab temporibus vero corporis? Laudantium, tempora quasi temporibus ea suscipit quae enim porro libero nemo ratione exercitationem debitis voluptas eos illo dolorem? Delectus, expedita ex laboriosam vitae a consequatur dolorem ab voluptate, ipsam nesciunt perspiciatis voluptatem porro neque? In, praesentium tempore? Eum saepe modi, aut iure possimus nulla commodi tempore eligendi rerum et. Amet ipsam exercitationem eius cumque pariatur cum molestias! Dolor voluptatibus maxime sapiente, nam dolores blanditiis reprehenderit quia laudantium debitis, facilis id quos. Quasi, recusandae? Ab, natus praesentium.</p>
            </article>
            <div className='w-[96%] md:w-3/4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ff033a] font-medium border-t-[1px] border-zinc-800 pb-2 md:pb-8'>
                Soprano Escort
            </div>
        </section>
    )
}
