import React from "react";
import Logo from "../../assets/images/logo(2).png";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => {
     
      return !prev;
    });
  };
  

  return (
    <div className="w-full bg-white dark:bg-dark relative z-[9999] text-black dark:text-white duration-300">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-16" />
            <p className=" text-[25px] sm:text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>

          {/* Desktop Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 lg:pr-8">
              <li className="py-4">
                <a href="#" className="text-xl font-semibold hover:text-primary transition duration-500">
                  Home
                </a>
              </li>
              <li className="py-4">
                <a href="#" className="text-xl font-semibold hover:text-primary transition duration-500">
                  Products
                </a>
              </li>
              <li className="py-4">
                <a href="#" className="text-xl font-semibold hover:text-primary transition duration-500">
                  Pricing
                </a>
              </li>
              <li className="py-4">
                <a href="#" className="text-xl font-semibold hover:text-primary transition duration-500">
                  Contact
                </a>
              </li>
              <DarkMode />
            </ul>
          </div>

          {/* Mobile View Sidebar */}
          <div className="md:hidden ">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-3xl" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
                
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden   w-full h-full bg-white dark:bg-dark shadow-lg  transition-all duration-300 ${showMenu ? "flex" : "hidden"} flex-col items-center justify-center`}>

        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <a href="#" className="text-xl font-semibold hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-xl font-semibold hover:text-primary">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-xl font-semibold hover:text-primary">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-xl font-semibold hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
