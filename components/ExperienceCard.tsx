import React from 'react'
import {motion} from "framer-motion"

type Props = {}

 function Experiencecard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-always bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200'>
        <motion.img
        initial ={{
            y:-100,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView = {{
            opacity:1,
            y:0
        }}
        viewport = {{
            once:true
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src = "https://blog.smu.edu/itconnect/files/2017/12/94e9035a11b4869bec9266f730084bac.png" alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> Adobe Student Ambassador</h4>
            <p className = "font-bold text-2xl mt-1"> Adobe</p>
            <div className='flex space-x-2 my-2'>
                {/*Tech Used*/}
                <img className='h-10 w-10 rounded-full' src = "https://play-lh.googleusercontent.com/Su39nteYoXMdmmWupitzo9XKZhZnstj2ObmJOR6S-wWCgSnF6USw3Weo7bcDL4RRv79G=w240-h480-rw" />
                <img className='h-10 w-10 rounded-full' src = "https://fstoptraining.com/wp-content/uploads/2018/11/Adobe-Lightroom.png" />
            </div>
            <p className='uppercase py-5 text-gray-300'> Started May 2021</p>

            <ul className='list-disc space-y-4 ml-5 text-lg '>
                <li>Collaborating with a team of student ambassadors to plan events and workshops to promote Adobe products around college campuses further </li>
                <li>Planned, marketed, and executed four interactive workshops, helping 200+ students learn how to use tools like Adobe Lightroom and Premiere Pro to increase campus-wide digital literacy.</li>
                <li>Conducted outreach to SDSU student organizations, resulting in workshop collaborations with Pi Kappa Alpha and Alpha Kappa Psi</li>
            </ul>
        </div>
        
        
    </article>


  )
}
export default Experiencecard