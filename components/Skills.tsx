import { Skill } from '@/typings'
import { motion } from 'framer-motion'
import SinlgeSkill from './Skill'
import { useState } from 'react'

type Props = {
  skills: Skill[]
}

const SinlgeSkills = ({ skills }: Props) => {
  const firstSkills = skills.slice(0, 8)
  const secondSkills = skills.slice(8, 14)
  const thirdSkills = skills.slice(14, 18)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center sm:pb-10 md:pb-0'
    >
      <h3 className='title'>Skills</h3>
      <p className='absolute top-28 text-lg text-gray-300 tracking-widest font-light italic mt-7 md:mt-2 lg:mt-3 px-3 xl:left-20 xl:top-32 xll:left-24 xll:ml-4'>
        What I can do
      </p>
      <div className='space-y-5 px-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-44 md:mt-32 lg:mt-36'>
          {firstSkills.map((skill) => (
            <SinlgeSkill key={skill._id} skill={skill} directionTop />
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
          {secondSkills.map((skill) => (
            <SinlgeSkill key={skill._id} skill={skill} directionTop />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {thirdSkills.map((skill) => (
            <SinlgeSkill key={skill._id} skill={skill} />
          ))}
        </div>
        <SinlgeSkill skill={skills[skills.length - 1]} />
      </div>
    </motion.div>
  )
}

export default SinlgeSkills
