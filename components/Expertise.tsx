import ExpertiseCard from './ExpertiseCard'
import { motion } from 'framer-motion'
import { Expertise } from '@/typings'

type Props = {
  expertise: Expertise[],
  expertiseDesc: string
}

const Expert = ({expertise, expertiseDesc}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='min-h-screen flex flex-col items-center justify-evenly relative max-w-full px-10 mx-auto text-center overflow-hidden'
    >
      <h3 className='title'>Expertise</h3>
      <p className='absolute top-28 text-sm lg:text-base xl:text-lg text-gray-300 tracking-wider sm:tracking-widest font-light italic mt-5 md:mt-7 px-3'>
        {expertiseDesc}
      </p>
      <div className='w-full items-center mx-auto p-10 justify-evenly mt-36 flex flex-col md:flex-row md:space-x-7 lg:space-x-12 xl:space-x-0 space-y-10 md:space-y-0'>
        {expertise.map((item) => <ExpertiseCard key={item._id} item={item} />)}
      </div>
    </motion.div>
  )
}

export default Expert
