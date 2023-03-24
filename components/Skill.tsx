import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  skill: {
    skill: string
    image: string
    dark: string
  }
}

const Skill = ({ skill }: Props) => {
  const [darkLogo, setDarkLogo] = useState(false)
  return (
    <div
      onMouseOver={() => skill.dark && setDarkLogo(true)}
      onMouseLeave={() => skill.dark && setDarkLogo(false)}
      className='flex items-center justify-center  border-2 border-gray-400 space-x-3 py-3 px-8 rounded-sm  bg-[#2d2d2d] hover:bg-gray-300  hover:border-[#2d2d2d] transition-all duration-200 ease-in-out hover:scale-105 shadow-md shadow-black hover:text-[#2d2d2d] group'
    >
      <p className='tracking-widest font-medium text-sm lg:text-base  xll:text-lg cursor-default text-gray-300 group-hover:text-[#2d2d2d]'>
        {skill.skill}
      </p>
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        src={darkLogo ? skill.dark : skill.image}
        alt='skill'
        className='h-8 w-10 object-contain'
      />
    </div>
  )
}

export default Skill
