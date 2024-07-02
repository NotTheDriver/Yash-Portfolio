import React from 'react';

const WorkExperience = () => {
    return (
        <div className=" p-4 rounded-md shadow-lg my-12 dark:text-white">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Frontend Developement Intern</h3>
                <a href="https://www.nsssfoundation.org/" target="_blank"> <p className="text-gray-600 dark:text-gray-200"><span className="font-semibold text-md text-teal-500">NSSSfoundation</span></p></a>
                <ul className="list-disc ml-8 mb-2">
                    <li>Developed and implemented a responsive website redesign for the NGO utilizing<span className="text-teal-500"> ReactJS and Tailwind CSS</span></li>
                    <li>Enhanced user experience (UX) and user interface (UI) of the NGO's website, improving information architecture and navigation.</li>
                    <li>Increased website traffic and engagement through improved design and functionality and <span className="text-teal-500">improved SEO</span>  using Wix</li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Freelance Video Editor & Designer</h3>
                <a href="https://www.fiverr.com/yashkrana?up_rollout=true" target="_blank"><p className="text-md font-semibold text-teal-500 ">Fiverr</p></a>
                <ul className="list-disc ml-8 mb-2">
                    <li>Delivered <span className="text-teal-500">65+</span> successful video editing and design projects for <span className="text-teal-500">30+ global clients.</span></li>
                    <li>Maintained <span className="text-teal-500">high</span> client satisfaction through exceptional communication and <span className="text-teal-500">on-time delivery.</span></li>
                </ul>
            </div>
            
        </div>
    );
};

export default WorkExperience;
