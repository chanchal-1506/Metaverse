import React from "react";
import home from "../../assets/images/hero.png";
import Banner1 from "../../assets/images/banner1.png"
import Banner2 from "../../assets/images/banner2.png"
import { BiPlayCircle } from "react-icons/bi";



function Home() {
  return (
    <>
    <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden  ">
        <div className="container min-h-[500px] flex  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 ">
              <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-4xl font-semibold">
                GET READY TO ENJ0Y VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  GAMES WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                <button data-aos="fade-up" data-aos-delay="500"
                className="primary-btn xl:w-[30%] lg:w-[40%] md:w-[60%] "> Get Started </button>
                
                <button  data-aos="fade-up" data-aos-delay="700"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary duration-300 py-2 px-3 text-white rounded-full hover:scale-105  xl:w-[30%]  lg:w-[40%] md:w-[60%]">
                <BiPlayCircle className=" text-[20px] sm:text-2xl" />See Demo</button>
              </div>
            </div>
            {/* image section */}
            <div data-aos="fade-up" data-aos-offset="0"
            className="order-1 sm:order-2 p-2">
            <img src={home} alt="" className="" />
            </div>
          </div>
      </div>
  </div>

        {/* second page */}
    <div className="py-12 sm:py-6 dark:bg-black dark:text-white duration-300 overflow-hidden">
      <div className="container min-h-[500px] flex  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* image section */}
            <div data-aos="fade-up" data-aos-once="false"
            className="order-2 sm:order-1">
            <img src={Banner1} alt="" className="" />
            </div>

            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 ">
              <h1 data-aos="fade-up" data className="text-3xl md:text-4xl font-semibold">
                GET READY TO ENJ0Y VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                <button data-aos="fade-up" data-aos-delay="500"
                className="primary-btn xl:w-[30%] lg:w-[40%] md:w-[60%] "> Get Started </button>
                
                <button  data-aos="fade-up" data-aos-delay="700"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary duration-300 py-2 px-3 text-white rounded-full hover:scale-105  xl:w-[30%]  lg:w-[40%] md:w-[60%]">
                    <BiPlayCircle className=" text-[20px] sm:text-2xl" />See Demo</button>
              </div>
            </div>
          </div>
        </div>
     </div>

     {/* third page */}

     <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden ">
        <div className="container min-h-[500px] flex  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 ">
              <h1 data-aos="fade-up" data className="text-3xl md:text-4xl font-semibold">
                GET READY TO ENJ0Y VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                <button data-aos="fade-up" data-aos-delay="500"
                className="primary-btn xl:w-[30%] lg:w-[40%] md:w-[60%] "> Get Started </button>
                
                <button  data-aos="fade-up" data-aos-delay="700"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary duration-300 py-2 px-3 text-white rounded-full hover:scale-105  xl:w-[30%]  lg:w-[40%] md:w-[60%]">
                <BiPlayCircle className=" text-[20px] sm:text-2xl" />See Demo</button>
              </div>
            </div>
            {/* image section */}
            <div data-aos="fade-up" data-aos-offset="0"
            className="order-1 sm:order-2 p-2">
            <img src={Banner2} alt="" className="" />
            </div>
          </div>
      </div>
  </div>
      

      </>

        

  );
};

export default Home;