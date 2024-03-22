

import { HoverEffect } from "@/app/components/ui/card-hover-effect"
import { BsFillMicFill } from 'react-icons/bs';
import { BiSolidRightArrow } from 'react-icons/bi'; 
import { PiTelevisionBold } from 'react-icons/pi'; 
import { FaGift, FaCode } from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineGroups2 } from "react-icons/md";

export function Cards() {
    return (
      <div className="max-w-5xl mx-auto px-8 bg-gray-100">
        <HoverEffect items={Projects} />
      </div>
    )
  }
  export default Cards ;

  const Projects= [
    {
     icon:<BsFillMicFill/>,
      heading: "Audio Services",
      description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
    },
    {
      icon:< BiSolidRightArrow/>,
      heading: "Media Services ",
      description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
    },
    {
      icon: <MdOutlineGroups2 />,
      heading: "Community Building",
      description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
    },
    {
     icon:<PiTelevisionBold />,
      heading: "Entertainment Services",
      description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
    },
    {
      icon :
      <HiAcademicCap />,
      heading: "Edtech Services",
     description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
    },
    {
    icon :<FaGift />,
      heading: "Digita Gifting",
      description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
  },
  
  
  
  {
    icon:<FaCode />,
     heading: "Web Development",
     description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
   },
   {
     icon :
     <GiBrain />,
     heading: "Creative Consultation",
    description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
   },
   {
   icon :<BsBank2 />,
     heading: "Franchisee Services",
     description: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust."
  },
  
  
  ]