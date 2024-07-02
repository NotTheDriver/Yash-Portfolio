import React from 'react'
import { FaReact } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import { DiNodejs, DiMongodb, DiJava, DiPython, DiCss3 } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import {PiFileCppFill} from "react-icons/pi"
import {
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
function Skills() {
  return (
    <div>
      <h3 className="text-3xl py-1  dark:text-white">Skills</h3>
      <div className=" text-5xl grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-16 py-3 ">
            {/* <a
              href="https://nextjs.org/"
              className="text-black dark:text-white"
            >
              <SiNextdotjs/>  
            </a> */}
            <a
              href="https://react.dev/"
              className="text-blue-400 "
            >
              <FaReact/>  
            </a>
            <a
              href="https://devdocs.io/cpp/"
              className="text-blue-400 "
            >
              <PiFileCppFill/>  
            </a>
            <a
              href="https://tailwindcss.com/"
              className="text-[#38bdf8]"
            >
              <SiTailwindcss/>
            </a>
            <a
              href="https://www.mongodb.com/"
              className="text-black dark:text-white"
            >
              <DiMongodb/>
            </a>
            <a
              href="https://nodejs.org/en"
              className="text-black dark:text-white"
            >
              <DiNodejs/>
            </a>
            <a
              href="https://www.javascript.com/"
              className="text-yellow-400"
            >
              <SiJavascript/>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="text-red-500"
            >
              <SiHtml5/>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="text-blue-500"
            >
              <DiCss3/>
            </a>
            <a
              href="https://expressjs.com/"
              className="text-black dark:text-white"
            >
              <SiExpress/>
            </a>
            <a
              href="https://git-scm.com/"
              className="text-red-600"
            >
              <BsGit/>
            </a>
            <a
              href="https://github.com/"
              className="text-black dark:text-white"
            >
              <AiFillGithub/>
            </a>
            <a
              href="https://www.python.org/"
              className="dark:text-white"
            >
              <DiPython/>
            </a>
          </div>
    </div>
  )
}

export default Skills
