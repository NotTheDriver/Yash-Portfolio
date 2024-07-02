import React,{useState} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
function Header() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    
    <div>
      <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 className='text-xl font-mono hover:'>NotTheDriver</h1>
        <ul className='flex items-center mr-10'>
          <li>
            <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl'/>
          </li>
          <li>
            <a className="bg-gradient-to-tr from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 box-shadow-hover:hover transition duration-500 transform hover:scale-105" href="https://docs.google.com/document/d/1q6y_z9DWyuEByx0AKamMkvPtzIlkJmLKw972owDxK04/edit?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
