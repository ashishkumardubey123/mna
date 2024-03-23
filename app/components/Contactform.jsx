'use client'
import React, { useState } from "react";
import Link from "next/link";
import { SiGmail,   } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contactform() {

   
  
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState(" ")
    const [massage, setMessage] = useState(" ")
     const handlename =(e)=>{
        setName(e.target.value)
     }

     const handleEmail =(e)=>{
        setEmail(e.target.value)
     }

     const handleMessage =(e)=>{
        setMessage(e.target.value)
     }
     const handdlsubmite =(e)=>
     {
        e.preventDefault()
        console.log(Name)
        console.log(Email)
        console.log(massage)
        setName(" ")
         setMessage("")
        setEmail(" ")
     } 

  return (
    <section className="bg-white ">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-blue-500 ">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Chat to our friendly team</h1>

            <p className="mt-3 text-gray-500 ">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-blue-300 rounded-full bg-blue-100/80 bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
                     <a href="mailto:info@mysite.com" >
                    <p className="mt-2 text-sm text-blue-500 ">info@mysite.com</p>
                    </a>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-300 rounded-full bg-blue-100/80 bg-gray-800">
                    <i>   <FaSearch /> </i>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 "> Connect Us on</h2>
                    <p className="mt-2 mx-auto flex gap-2 text-lm text-gray-500 ">


                        <a href="https://www.instagram.com/wix/">
                        <span className="inline-block p-3 text-black rounded-full bg-blue-100/80 hover:text-orange-600">
                     <i><FaInstagram /></i>
                     
                      </span>
                        </a>
              
                      <a href="https://www.facebook.com/WixStudio">
                      <span className="inline-block p-3 text-black rounded-full bg-blue-100/80 ">
                      <i className="hover:text-blue-800"><FaFacebook />
</i>
                      </span>
                      </a>
              
                      <a href="https://www.linkedin.com/company/wix-com">
                      <span className="inline-block p-3 text-black rounded-full bg-blue-100/80 ">
                      <i className="hover:text-blue-800"><FaLinkedin /></i>
                      </span>
                      </a>
                    
                     
                    <a href="https://www.youtube.com/user/Wix">
                    <span className="inline-block p-3 text-black rounded-full bg-blue-100/80 hover:text-red-600">
                    <i><FaYoutube /></i>                     
                      </span>
                    </a>

                     <a href="https://twitter.com/WixStudio">

                     <span className="inline-block p-3 text-black rounded-full bg-blue-100/80 hover:text-blue-600">
                    <i>  <FaXTwitter /> </i> 
                     
                      </span>
                     </a>
                  <a href="https://www.tiktok.com/@wix">
                  <span className="inline-block p-3 text-blue-300 rounded-full bg-blue-100/80 hover:text-pink-600">
                    <i><FaTiktok /></i>
                     
                      </span>
                  </a>
                    </p>
                   
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-300 rounded-full bg-blue-100/80 bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-blue-500 ">500 Terry Francine Street,San Francisco, CA 94158</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-300 rounded-full bg-blue-100/80 bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 ">123-456-7890</p>
                </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
                <form   onSubmit={handdlsubmite} >
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
                            <input type="text" required onChange={handlename}  value={Name} placeholder="John "  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                        <input type="email" required onChange={handleEmail}  value={Email} placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block  mb-2 text-sm text-gray-600 ">Message</label>
                        <textarea value={massage} required onChange={handleMessage}  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button   className="relative  inline-flex w-full h-12 mt-2 mb-2 overflow-hidden rounded-lg p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-5 text-base font-medium text-white backdrop-blur-3xl">
              submit
            </span>
          </button>

      
       

                </form>
            </div>
        </div>
    </div>
</section>






  )
}

export default Contactform
