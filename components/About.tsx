import { motion } from "framer-motion"
import React from "react"
import { PageInfo } from "../typings"


type Props = {
    pageInfo: PageInfo
}

export default function About({pageInfo}:Props){
    return (
        <motion.div
         initial = {{
            opacity:0,
         }}
         whileInView = {{
            opacity: 1,
         }}
         transition= {{
            duration: 1.5,
         }}
         className = "flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center" > 
        <h3 className ="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About </h3>
        
        <motion.img
            initial= {{
                x:-200,
                opacity:0,
            }}
            transition= {{
                duration:1.2,
            }}

            whileInView = {{
                opacity: 1,
                x:0
            }}
            viewport= {{
                once:true
            }}
            src = "https://cdn.sanity.io/images/krx2c3wp/production/9e21200a46f46988c17b567fda4666405b1157f8-1228x1818.jpg"
            className= "mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[800px]"

        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold"> Here is a <span className="underline decoration-lime-600/50" ></span> little background</h4>
            <p className="text-lg">
                I&apos;m Ronan Jared Borja and I&apos;m a student currently attending San Diego State University. I originally entered as a Film Production
                major but am currently a Computer Science Major. I grew my interest in coding through Roblox and the gaming industry as well as 
                web development and looking to futher my skills through creating more projects that impact my daily life such as a discord bot. 
                I am an Adobe Ambassador for my school and utilize my film production skillset along side my computer science skillset. 
            </p>
        </div>
        </motion.div>
    
    )
}