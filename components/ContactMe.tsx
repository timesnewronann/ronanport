import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from "react-hook-form"

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

function ContactMe({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ronanborja26@gmail.com?sbuject={formData.subject}&body=Hi, my name is 
        ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
        <h3 className ="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact Me
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Always ready to go.  {" "}
                <span className = "decoration-[#47BA4F]/20 underline">Let&apos;s connect!</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space x-5 justify-center'>
                <EnvelopeIcon className='text-[#47BA4F] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'> ronanborja26@gmail.com</p>
                </div>

                <div className='flex items-center space x-5 justify-center'>
                <PhoneIcon className='text-[#47BA4F] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'> 4087126302</p>
                </div>

                <div className='flex items-center space x-5 justify-center'>
                <MapIcon className='text-[#47BA4F] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'> San Diego, CA</p>
                </div>

                <form onSubmit = {handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className ="flex space-x-2">
                        <input{...register('name')} placeholder='Name' className= "contactInput" type ="text" />
                        <input{...register('email')} placeholder ='Email' className= "contactInput" type = "text" />
                    </div>

                    <input{...register('subject')} placeholder="Subject" className="contactInput" type = "text"/>
                    <textarea{...register('message')} placeholder='Message' className = "contactInput" />

                    <button type= "submit"
                     className ="bg-[#47BA4F]/20 py-5 px-10 rounded-md text-black font-bold text-lg">
                        Submit

                    </button>
                </form>



            </div>
        </div>
    </div>
  )
}

export default ContactMe