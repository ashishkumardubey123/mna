import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    
      <footer class="bg-black ">
    <div class="container flex flex-col  justify-between px-8 py-2 mx-2 lg:flex-ro">
    
        <span className="text-[#FFFFFF] text-5xl max-w-80  leading-tight		 text-left">MnA got you puzzled?</span>
        <span className="text-[#FFFFFF] text-8xl	   leading-tight		 text-left">MnA</span>
     

        

            <div className="flex  lg:flex-row flex-col justify-evenly mb-3 mt-6 gap-6 lg:mt-0">
            <div className="flex flex-col gap-2">
                <Link href={"/service"} className="text-sm text-white transition-colors duration-300 hover:text-blue-500">
                servicee
                </Link>
                <Link href={"/about"} className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500">
                About
                </Link>
                <Link href={"/contact"} className="text-sm text-white transition-colors duration-300 hover:text-blue-500">
                contact
                </Link>
                <Link href="#" className="text-sm text-white transition-colors duration-300 hover:text-blue-500">
                Careers
                </Link>
            </div>

            <div className="  md:block">
                <h2 className="text-base text-white">
                <p>500 Terry Francine Street,</p>
                <p>San Francisco, CA 94158</p>
                </h2>
                <p className="text-white">
                <a href="mailto:info@mysite.com">info@mysite.com</a>
                </p>
                <p className="text-white">123-456-7890</p>
            </div>

            <div className="flex flex-col lg:gap-2 text-white">
                <a href="https://www.linkedin.com/company/wix-com" target="_blank">LinkedIn</a>
                <a href="https://www.instagram.com/wixstudio" target="_blank"> Instagram</a>
                <a href="https://www.facebook.com/WixStudio" target="_blank"> Facebook</a>
            </div>
            </div>

      

  
    </div>
</footer>
  );
};

export default Footer;
