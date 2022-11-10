import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Projects

        </h3>
        <div className = "relative w-full flex overflow x-scroll y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#47BA4F]/80">
          {projects?.map((project,i) =>(
          <div key = {project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
            initial = {{
              y:-300,
              opacity:0,
            }}
            transition={{duration:1.2}}
            whileInView ={{opacity: 1, y:0}}
            viewport = {{once: true}} 
            src = {urlFor(project?.image).url()}
            alt = ""
            />
            <img src= "online.png"
            />
            <div>
            <h4 className = "text-4xl font-semibold text-center"> 
              <span className = "underline decoration-[#47BA4F]/80">
                Project { i + 1} of {projects.length}:  
                </span>{" "}
              {project?.title}
            </h4>

            
            
            <p className='text-lg text-center md:text-left'>
              {project.summary}
            </p>
            </div>
          </div>
        ))}
    
        
      </div>
      <div className='w-full absolute top-[30%] bg-[#47BA4F]/10 left-0 h-[500px] -skew-y-12'>
        
      </div>
    </div>
  )
}

export default Projects