import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import {socials} from '../typings'

type Props = {
    socials: socials[]; // gonna get a social array
}

export default function Header({socials }: Props) {
  return (
    <header className='sticky top=0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
       <motion.div
        initial= {{
            x:-500,
            opacity:0,
            scale:0.5

        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition ={{
            duration:1.5,
        }}

        className='flex flex-row items-center'>
            
        {/* Social Icons*/}
        {socials && socials.map((socials) => (
            <SocialIcon
            key = {socials._id}
            url = {socials.url}
            fgColor='white' 
            bgColor='trasnparent' 
            />
        ))}

        {/*<SocialIcon url = "https://github.com/timesnewronann" 
        fgColor='white' 
        bgColor='trasnparent' />

        <SocialIcon url = "https://www.instagram.com/ronanborja/" 
        fgColor='white' 
        bgColor='trasnparent' /> */}


       </motion.div>
        
         <Link href= "#ContactMe">
        <motion.div
            initial= {{
                x:500,
                opacity:0,
                scale:0.5

            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition ={{
                duration:1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='white' 
            bgColor='trasnparent' 
            />

            <p className='uppercase hidden md:inline-flex text-sm-gray-400'> Get in Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}