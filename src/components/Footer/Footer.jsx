import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden ">
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl ">
        <div data-aos="fade-up" className="">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Metaverse
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
              </p>
            </div>

             
              
            {/* Footer Links section */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                <li><a href="/#" className="inline-block hover:text-primary duration-200">Home</a></li>
                <li><a href="/#about" className="inline-block hover:text-primary duration-200">About</a></li>
                <li><a href="/#contact" className="inline-block hover:text-primary duration-200">Contact</a></li>
                <li><a href="/#blog" className="inline-block hover:text-primary duration-200">Blog</a></li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                <li><a href="/#" className="inline-block hover:text-primary duration-200">Home</a></li>
                <li><a href="/#about" className="inline-block hover:text-primary duration-200">About</a></li>
                <li><a href="/#contact" className="inline-block hover:text-primary duration-200">Contact</a></li>
                <li><a href="/#blog" className="inline-block hover:text-primary duration-200">Blog</a></li>
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
              <p className="mb-3">Mumbai, Maharashtra</p>
              <p>+91 1234567890</p>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://github.com/chanchal-1506" target="black"><FaGithub className="text-3xl hover:text-primary duration-300" /></a>
                <a href="https://www.linkedin.com/in/chanchal26/" target="blank"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                <a href="https://www.linkedin.com/in/chanchal26/" target="black"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
              </div>
            </div>
          </div>
          </div>

          </div>
        </div>
        </div>
      
  )
}

export default Footer
