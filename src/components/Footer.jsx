import React from 'react'
import { FloatingDockDemo } from './FloatingDock'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex flex-col justify-between bg-richblack-300">
        <div className="flex p-10">
            <div className="w-full md:w-1/3 p-5 mb-4 md:mb-0">
                <h2 className="text-3xl font-extrabold font-serif text-nowrap mb-2">Thinker Corporation pvt.ltd.</h2>
                <p className="text-white  text-wrap">
                    Empowering minds with innovative ideas. Join us on the journey of exploration and creativity.
                </p>
            </div>
            <div className="justify-end">
                <FloatingDockDemo/>
            </div>
            <div className="flex w-96 justify-center mt-10 p-5 items-end flex-col">
                <h3 className="text-2xl font-bold font-sans mb-2">Quick Links</h3>
                <ul>
                <li>
                    <a href="/about" className="text-white hover:text-richblack-900 transition-colors">
                    About Us
                    </a>
                </li>
                <li>
                    <a href="/services" className="text-white hover:text-richblack-900 transition-colors">
                    Services
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white hover:text-richblack-900 transition-colors">
                    Contact Us
                    </a>
                </li>
                <li>
                    <a href="/privacy" className="text-white hover:text-richblack-900 transition-colors">
                    Privacy Policy
                    </a>
                </li>
                </ul>
            </div>
        </div>
        <div className="mt-8 text-center text-white mb-8 ">
          &copy; {new Date().getFullYear()} Thinker. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
        
