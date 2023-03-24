import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'

type Props = {
  project: {
    linkToBuild: string
    linkToCode: string
    summary: string
    technologies: string[]
    technologiesMobile: string
    image: string
    title: string
  }
}

const Project = ({ project }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-screen h-screen flex flex-col snap-center flex-shrink-0 justify-center items-center px-0 space-y-0 relative'
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        className='shadow-sm shadow-black mb-20 sm:mt-20 sm:mb-5 group hover:shadow-none'
      >
        <img
          src={project.image}
          alt=''
          className='h-full object-fill sm:h-64 sm:rounded-t-sm transition transform duration-150 sm:group-hover:scale-105
        '
        />
        <div className='flex items-center justify-evenly space-x-20 w-full px-5 py-3 bg-[#242424] font-light rounded-b-sm transition transform duration-150 sm:group-hover:scale-105'>
          <Link
            href={project?.linkToCode}
            target='_blank'
            className='projectBtn'
          >
            Source Code
            <AiFillGithub className='ml-2' size={25} />
          </Link>
          <Link
            href={project?.linkToBuild}
            target='_blank'
            className='projectBtn'
          >
            Live Demo
            <BsBoxArrowUpRight className='ml-2' size={20} />
          </Link>
        </div>
      </motion.div>
      <h4 className='text-3xl lg:text-4xl text-gray-100 tracking-widest sm:mt-10 mb-5 pb-10 sm:pb-5'>
        {project?.title}
      </h4>
      <p className='projectDesc text-sm sm:text-base'>{project?.summary}</p>
      <p className='projectDesc lg:hidden text-sm sm:text-base'>
        <span className='font-medium'><br />Used Tools: </span>{' '}
        {project?.technologiesMobile}.
      </p>
      <article className='hidden absolute right-6 xl:right-24 bottom-28 lg:flex flex-col space-y-5 p-5 overflow-hidden rounded-sm shadow-sm hover:shadow-md hover:shadow-black shadow-black transition-transform backdrop-filter backdrop-blur-lg duration-100 hover:scale-110 bg-[#242424] bg-opacity-30'>
        <p className='font-medium text-lg'>Used Technologies</p>
        <ol className='pointer-events-none tracking-wider space-y-1 text-gray-300'>
          {project?.technologies?.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ol>
      </article>
    </motion.div>
  )
}

export default Project
