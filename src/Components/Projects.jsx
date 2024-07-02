import React from 'react'
import code from "../assets/design.png"
function Projects() {
  return (
    <section className="">
        <div>
            <h3 className="text-3xl py-1 dark:text-white">
                Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Here's a preview of some of the projects I've developed using different tech stacks, Be sure to check them out!
            </p>
        </div>
        <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 flex-1 flex flex-col items-center box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
              <img className="items-center"src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Blog Site
              </h3>
              <p className="py-2">
                A photo and text sharing blog that allows user to share media and thoughts
              </p>
              <span className="flex justify-center gap-3"><h4 className=" text-teal-600">Github</h4>
              <h4 className=" text-teal-600">Tools Used</h4></span>
              
              <p className="text-gray-800 py-1">Reactjs</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Appwrite</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 flex-1 flex flex-col items-center box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
          <img className="items-center"src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Old Portfolio
              </h3>
              <p className="py-2">
                Portfolio to direct clients to my Fiverr Page 
              </p>
              <span>
              <a href="https://github.com/NotTheDriver/portfolio" target="_blank"><h4 className=" text-teal-600">Github</h4></a>
              {/* <h4 className="py-4 text-teal-600">Tools Used</h4> */}
              </span>
              
              <p className="text-gray-800 py-1">Reactjs</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Framer Motion</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 flex-1 flex flex-col items-center box-shadow-hover:hover transition duration-500 transform hover:scale-105 ">
          <img className=""src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Vaccination Management System
              </h3>
              <p className="py-2">
              Manages the vaccine inventory of a hospital for new and existing patients.
              </p>
              <a href=""><h4 className="py-4 text-teal-600">GitHub</h4></a>
              <p className="text-gray-800 py-1">C++</p>
          </div>
        </div>
    </section>
  )
}

export default Projects
