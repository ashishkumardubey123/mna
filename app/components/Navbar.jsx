'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
    console.log(document.body.getBoundingClientRect().top > scrollPos)
  };
  return (


<div>


<nav className={`w-full transition-all bg-black relative  top  duration-500      ${show ? 'top-0' : '-top-28'} z-10`}>

  
  <div className="  justify-between px-4 mx-auto lg:max-w-7xl justify-items-center	 md:items-center md:flex md:px-8">
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
        className={`flex-1 transition-all justify-self-center pb-3 mt-8   duration-300  md:block md:pb-0 md:mt-0 ${
          navbar ? 'p-12 md:p-0 block' : 'hidden'
        }`}
      >
        <ul className="h-screen transition-all  md:h-auto items-center   duration-300    justify-center md:flex ">
          <li onClick={() => setNavbar(false)} className="pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
           <Link href={"/"} onClick={() => setNavbar(false)}>
              Home
            </Link>
          </li>

          <li onClick={() => setNavbar(false)} className="pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
          <Link href={"/service"} onClick={() => setNavbar(false)}>
          service
            </Link>
          </li>

          <li onClick={() => setNavbar(false)} className="pb-6 text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
          <Link href={"/about"} onClick={() => setNavbar(false)}>
          About
            </Link>
          </li>
          <li onClick={() => setNavbar(false)} className="pb-6 text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
          <Link   href={"/contact"} onClick={() => setNavbar(false)}>
          contact
            </Link>
          </li>
      
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>


  )
   
  

};

export default Navbar;
