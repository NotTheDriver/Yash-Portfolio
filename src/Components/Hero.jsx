import React from 'react'
import {AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import deved from "../assets/dev-ed-wave.png"
function Hero() {
  return (
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Yash Rana</h2>
      <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Front-End Developer and Designer</h3>
      <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
        Hello There,I'm a Final year engineering 
        student with a knack for  <span className="text-md text-teal-500"> Development </span> and  <span className="text-md text-teal-500"> Content Creation </span>. I've an inate passion for making websites.
        You can find me editing videos in my spare time or posting Letterboxd Reviews...
      </p>
      
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
        <a href="https://github.com/NotTheDriver" className="hover:text-sky-700 box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
        <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/yashkrana/" className="hover:text-sky-700 box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
        <AiFillLinkedin/>
        </a>
        <a href="https://twitter.com/NotTheDriver_1" className="hover:text-sky-700 box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
        <AiFillTwitterCircle/>
        </a>
        <a href="https://leetcode.com/u/NotTheDriver/"className="hover:text-sky-700 box-shadow-hover:hover transition duration-500 transform hover:scale-105 "><SiLeetcode/></a>
        {/* <AiFillInstagram/> */}
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
      <img className="hover:text-sky-700 box-shadow-hover:hover transition duration-500 transform hover:scale-105 "
      src={deved}
      alt="Image description" // Provide a meaningful description
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
            </div>

    </div>
  )
}

export default Hero
