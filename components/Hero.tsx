import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      'I am a Frontend Web Developer',
      'Specialized in React & Next.js',
    ],
    loop: true,
    delaySpeed: 200,
  })
  return (
    <motion.div
      className='flex flex-col justify-center items-center h-screen text-center overflow-hidden space-y-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        className='object-cover h-36 w-36 rounded-full'
        alt=''
        width={144}
        height={144}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 sm:tracking-[15px] pb-2 tracking-[12px]'>
          {pageInfo.role}
        </h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semi px-10'>
          <span className='mr-3 '>{text}</span>
          <Cursor cursorColor='#f7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroBtn'>About</button>
          </Link>
          <Link href='#expertise'>
            <button className='heroBtn'>Expertise</button>
          </Link>
          <Link href='#skills'>
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroBtn'>Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
