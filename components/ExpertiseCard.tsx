import { motion } from 'framer-motion'

type Props = {
  item: {
    expImg: string
    expTitle: string
    expInfo: string
  }
}

const ExpertiseCard = ({ item }: Props) => {
  return (
    <article className='flex flex-col items-center space-y-7 xl:space-y-3 flex-shrink-0 min-h-content sm:max-h-[510px] min-w-[300px] max-w-[370px] sm:max-w-[450px] md:max-w-[350px] lg:max-w-[451px] bg-[#2d2d2d] p-10 md:px-0 lg:p-7 lg:pb-12 lg:pt-10 xl:pb-8 xl:pt-5 hover:scale-105  transition transform duration-200 overflow-hidden rounded-sm shadow-md  hover:shadow-gray-900 hover:shadow-lg'>
      <motion.img
        src={item.expImg}
        alt=''
        className='h-32 w-56 rounded-full xl:w-[200px] xl:h-[200px] object-scale-down'
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />
      <div className='px-0 md:px-10 space-y-3 text-left'>
        <h4 className='text-base font-medium tracking-widest sm:text-2xl text-gray-100 md:tracking-wide lg:tracking-widest xl:text-3xl xl:tracking-normal'>
          {item.expTitle}
        </h4>
        <p className='tracking-wider text-gray-300 text-sm sm:text-base'>{item.expInfo}</p>
      </div>
    </article>
  )
}

export default ExpertiseCard
