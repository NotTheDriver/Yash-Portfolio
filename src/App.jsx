import Header from './Components/Header'
import Hero from './Components/Hero' 
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import WorkExperience from './Components/WorkExperience'
import React,{useState} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Contact from './Components/Contact'
function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <div className={darkMode ? 'dark': ""}>
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
    {/* <Header/> */}
    <div>
      <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 className='text-xl font-mono hover:'>NotTheDriver</h1>
        <ul className='flex items-center mr-10'>
          <li >
            <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl hover: box-shadow-hover:hover transition duration-500 transform hover:scale-110'/>
          </li>
          <li className=' hover: box-shadow-hover:hover transition duration-500 transform hover:scale-105'>
            <a className="bg-gradient-to-tr from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-l from-cyan-500 to-teal-500" href="https://docs.google.com/document/d/1q6y_z9DWyuEByx0AKamMkvPtzIlkJmLKw972owDxK04/edit?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
    <Hero/>
    <WorkExperience/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    </div>
  )
}

export default App
