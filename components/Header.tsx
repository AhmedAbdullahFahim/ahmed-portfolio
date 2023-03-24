import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { socials } from '../data/header'
import { cv } from '../data/header'

type Props = {}

const Header = ({}: Props) => {
  const router = useRouter()
  return (
    <header className='sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center'>
      <motion.div
        className='flex items-center'
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
        }}
      >
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
          />
        ))}
        <Link
          href={cv}
          target='_blank'
          className='font-light text-lg tracking-wider text-gray-400 ml-3'
        >
          Resumé
        </Link>
      </motion.div>
      <motion.div
        onClick={() => router.replace('/#contact')}
        className='flex items-center cursor-pointer'
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
        }}
      >
        <SocialIcon
          className='cursor pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex font-light text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  )
}

export default Header
