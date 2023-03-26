import Project from './Project'
import { projects } from '../data/projects'

type Props = {}

const Projects = ({}: Props) => {
  return (
    <div className='h-[90vh] sm:h-screen flex items-center justify-evenly relative max-w-full overflow-hidden flex-col md:flex-row text-left mx-auto z-0'>
      <h3 className='title top-20 '>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll snap-mandatory overflow-y-hidden snap-x z-20 scrollbar-track-gray-400/20 scrollbar-thumb-gray-400 scrollbar-thin'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className='w-full absolute bg-[#F7AB0A]/20 left-0 h-[400px] top-[30%] -skew-y-12' />
    </div>
  )
}

export default Projects
