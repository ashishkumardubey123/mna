'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (


<nav
        className={` dark:bg-black z-[100] start-0 border-b justify-center bg-black border-gray-200 dark:border-gray-700 shadow md:inset-x-0 md:border-t ${
          isSticky
            ? "sticky top-0 md:translate-y-3 md:w-3/4 lg:w-4/5 mx-auto md:rounded-3xl  z-[100] transition-all duration-300"
            : "  w-full z-[100] "
        }  shadow-4xl `}
      >

  
  <div className="  justify-between px-4 mx-auto lg:max-w-7xl items-center	 md:items-center md:flex md:px-8">
    <div >
   

      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        {/* LOGO */}
        <div className="  w-14 -mb-3 ">
        <Link href="/"  >
      <img src="/logo.jpg" className="   "  alt="img" />
        </Link>
        </div>
      
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
             <img src="/close.svg" width={30} height={30} alt="logo" />

            ) : (
              <img
              src="/hamburger-menu.svg"
              width={30}
              height={30}
              alt="logo"
              className="focus:border-none active:border-none"
            />
            )}
          </button>
        </div>
      </div>
    </div>
    <div>
      <div
        className={`flex-1 transition-all justify-self-center    duration-300  md:block md:pb-0 md:mt-0 ${
          navbar ? 'p-12 md:p-0 block' : 'hidden'
        }`}
      >
        <ul className="h-screen transition-all  md:h-auto items-center   duration-300    justify-center md:flex ">
          
           <Link href={"/"} onClick={() => setNavbar(false)}>
           <li  className=" text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              Home
             </li>
            </Link>
         

            <Link href={"/service"} onClick={() => setNavbar(false)}>
          <li  className=" text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
         
          service
          
          </li>
          </Link>

          <Link href={"/about"} onClick={() => setNavbar(false)}>
          <li  className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
         
          About
        
          </li>
            </Link>

            <Link   href={"/contact"} onClick={() => setNavbar(false)}>
          <li  className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
         
          contact
         
          </li>
          </Link>
      
        </ul>
      </div>
    </div>
  </div>
</nav>



  )
   
  

};

export default Navbar;
