import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import {PageInfo} from '../typings'



type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const[text,count] = useTypewriter({
        words:[
            `timesnewRonan`,
            'Ronan Jared Borja', 
            'Student',
            'Basketball-lover',
            'lifelong learner',
        ],
        loop:true,
        delaySpeed:2000,
    })
  
  
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover ' src= {"Ronan.jpg" }alt ="" />
        
        <div >
            <h2 className='texts-sm uppercase text-gray-300 pb-2 tracking-[15px]'>
                timesnewRonan
            </h2>

        </div>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-5 z-20'>
            <Link href="#about">
            <button className ="heroButton"> About </button>
            </Link>

            <Link href = "#Experience">
            <button className ="heroButton">Experience </button>
            </Link>
            
            <Link href = "#Skills">
            <button className ="heroButton">Skills </button>
            </Link>

            <Link href = "#Projects">
            <button className ="heroButton"> Projects</button>
            </Link>

            <Link href = "#Resume">
            <button className ="heroButton"> Resume</button>
            </Link>

            <Link href = "Cool Stuff">
            <button className ="heroButton"> Cool Stuff</button>
            </Link>
        </div>


    </div>

  )
}