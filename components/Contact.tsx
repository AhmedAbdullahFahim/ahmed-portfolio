import Link from 'next/link'
import { BsPhoneFill, BsLinkedin } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string
  subject: string
  email: string
  message: string
}

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:ahmed.abdallah5022@gmail.com?subject=${data.subject}&body=My name is ${data.name}. ${data.message} (${data.email})`
  }
  return (
    <div className='h-screen flex flex-col md:flex-row justify-evenly relative text-center md:text-left max-w-7xl px-10 mx-auto items-center'>
      <h3 className='title'>Contact</h3>
      <div className='flex flex-col space-y-10 mt-24'>
        <div className='space-y-10'>
          <div className='contactDetail mr-9'>
            <BsPhoneFill size={25} className='text-gray-400' />
            <p className=''>+20106253799</p>
          </div>
          <div className='contactDetail '>
            <FaEnvelope size={25} className='text-gray-400' />
            <p className=''>ahmed.abdallah5022@gmail.com</p>
          </div>
          <div className='contactDetail'>
            <BsLinkedin size={25} className='text-gray-400' />
            <Link
              href='https://www.linkedin.com/in/ahmed-abdullah-ab7434188/'
              target='_blank'
              className=''
            >
              linkedin.com/in/ahmed
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 sm:w-fit mx-auto w-[300px]'
        >
          <div className='flex flex-col justify-center space-y-2 sm:space-x-3 sm:flex-row sm:space-y-0'>
            <input
              required
              {...register('name')}
              type='text'
              className='contactInput'
              placeholder='Name'
            />
            <input
              required
              type='email'
              {...register('email')}
              className='contactInput'
              placeholder='Email'
            />
          </div>
          <input
            required
            type='text'
            {...register('subject')}
            className='contactInput'
            placeholder='Subject'
          />
          <textarea
            required
            className='contactInput'
            {...register('message')}
            placeholder='Message'
          />
          <button
            type='submit'
            className='py-3 px-10 rounded-sm font-bold text-lg bg-[#2d2d2d] border border-gray-700 hover:bg-gray-300  hover:border-[#2d2d2d] transition-all duration-200 ease-in-out hover:text-[#2d2d2d] text-gray-300 tracking-wider'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
