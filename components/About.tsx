import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      className='h-screen flex flex-col items-center justify-evenly relative text-center max-w-7xl px-10 mx-auto md:text-left md:flex-row'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className='title'>About</h3>
      <motion.div
        className='min-w-fit'
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          width={600}
          height={600}
          alt=''
          className='object-cover rounded-full h-56 w-56 object-top mt-32 flex-shrink-0 md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] md:mt-0 xl:mr-10'
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide md:tracking-wider text-gray-200'>
          Here is a <span className='italic text-gray-400'>little</span>{' '}
          background
        </h4>
        <p className='text-sm lg:text-base xl:text-lg text-gray-300 tracking-wide sm:tracking-wider'>
          {pageInfo?.backgroundInfo}
        </p>
      </div>
    </motion.div>
  )
}

export default About
