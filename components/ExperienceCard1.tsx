import React from 'react'
import {motion} from "framer-motion"

type Props = {}

 function Experiencecard1({}: Props) {
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
        src = "https://yt3.ggpht.com/ytc/AMLnZu-gDPMq-OIiAVgo0Tzp2R2enz0KfCfFc2_DboFIWw=s900-c-k-c0x00ffffff-no-rj" alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> Producer</h4>
            <p className = "font-bold text-2xl mt-1">Simply Basketball</p>
            <div className='flex space-x-2 my-2'>
                {/*Tech Used*/}
                <img className='h-10 w-10 rounded-full' src = "AfterEffects.png" />
                <img className='h-10 w-10 rounded-full' src = "PremierePro.png" />
            </div>
            <p className='uppercase py-5 text-gray-300'> Started DEC 2019</p>

            <ul className='list-disc space-y-4 ml-5 text-lg '>
                <li>Created basketball content that 2.6k viewers have viewed</li>
                <li>Leveraged knowledge in Premiere Pro and After Effects to create captivating highlight reels for players</li>
                <li>Led the production team that broadcasted the 2022 Simply Basketball Tournament. The Livestream of  the games was viewed by over 100 viewers every hour</li>
            </ul>
        </div>
        
        
    </article>
  )
}
export default Experiencecard1