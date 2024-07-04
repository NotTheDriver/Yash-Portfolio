import React from 'react'
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="text-center">
        <h3 className="text-md mt-10 py-1 dark:text-white">Get in Touch</h3>
        <a href="mailto:yashkrana2002@gmail.com"><p className="text-white text-center flex justify-center"><MdEmail/></p></a>
    </div>
  )
}

export default Contact
