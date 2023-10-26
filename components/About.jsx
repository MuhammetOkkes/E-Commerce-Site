import React from 'react'
import Image from 'next/image'
import Title from './ui/Title'


const About = () => {
  return (
    <div className='bg-[#f1f2f3] py-20'>
    <div className='container mx-auto items-center flex text-black gap-20 justify-center flex-wrap-reverse'>
    
      <div className='md:w-1/2'>
        <Title addClass="text-[40px]">About</Title>
        <p className='my-5 flex flex-col'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam numquam delectus blanditiis quia, repudiandae in veniam eligendi nostrum a iusto earum provident? Earum, doloribus!</p>
      </div>


      <div className='flex justify-center'>
      <div className='relative sm:w-[400px] sm:h-[400px] flex justify-center w-[400px] h-[400px]'>
        <Image src="/images/about1.png" layout="fill" alt=""/>
      </div>
    </div>
      </div>
    </div>
  )
}

export default About
