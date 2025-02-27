import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

function Features() {
  return (
    <div className=" py-14 sm:min-h-[600px] dark:bg-black dark:text-white duration-300 overflow-hidden">
      <div>
      <h1 data-aos="fade-up"
        className="text-3xl font-semibold text-center sm:text-4xl mb-12">Why Choose Us</h1>

    {/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
    <div data-aos="fade-up" data-aos-delay="300"
    className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300">
       <div className="grid place-items-center">  
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
       </div>
                <h1 className="text-2xl">Captivating Videos</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="300"
        className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300">
       <div className="grid place-items-center">  
        <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
       </div>
                <h1 className="text-2xl">Safe Transactions</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="300"
        className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300">
       <div className="grid place-items-center">  
        <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
       </div>
                <h1 className="text-2xl">Experience Reality</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
        </div>
    </div> 

        
    </div>
</div>
    
      
    
  )
}

export default Features
