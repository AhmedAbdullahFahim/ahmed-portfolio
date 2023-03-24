import ExpertiseCard from './ExpertiseCard'
import { motion } from 'framer-motion'
import { expertise } from '../data/expertise'

type Props = {}

const Expert = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='min-h-screen flex flex-col items-center justify-evenly relative max-w-full px-10 mx-auto text-center overflow-hidden'
    >
      <h3 className='title'>Expertise</h3>
      <p className='absolute top-28 text-sm lg:text-base xl:text-lg text-gray-300 tracking-wider sm:tracking-widest font-light italic mt-5 md:mt-7 px-3'>
        I am eager to take on new challenges and use my expertise to contribute
        to successful projects.
      </p>
      <div className='w-full items-center mx-auto p-10 justify-evenly mt-36 flex flex-col md:flex-row md:space-x-7 lg:space-x-12 xl:space-x-0 space-y-10 md:space-y-0'>
        {expertise.map((item, index) => (
          <ExpertiseCard key={index} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default Expert
