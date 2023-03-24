import { motion } from 'framer-motion'
import SinlgeSkill from './Skill'
import { skills } from '../data/skills'

type Props = {}

const SinlgeSkills = ({}: Props) => {
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

      <div className='space-y-5 px-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-44 md:mt-32 lg:mt-36'>
          {firstSkills.map((skill, index) => (
            <SinlgeSkill key={index} skill={skill} />
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
          {secondSkills.map((skill, index) => (
            <SinlgeSkill key={index} skill={skill} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {thirdSkills.map((skill, index) => (
            <SinlgeSkill key={index} skill={skill} />
          ))}
        </div>
        <SinlgeSkill skill={skills[skills.length - 1]} />
      </div>
    </motion.div>
  )
}

export default SinlgeSkills
