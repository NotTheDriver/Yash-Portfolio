import React from 'react'

function Footer() {
    let date=new Date().getFullYear();
  return (
    <div className="text-center dark:text-gray-300 mt-10">
        <h4>Copyright@{date}</h4>
        <h4>All Rights Reserved</h4>
    </div>
  )
}

export default Footer
