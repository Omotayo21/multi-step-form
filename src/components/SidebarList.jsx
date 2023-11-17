import React from 'react';
import { useLocation } from 'react-router-dom';

const SidebarList = ({num, text, path}) => {
  const location = useLocation();
  return (
    < div className='-mb-6'>
       
    <div className="flex items-center lg:gap-4  ">
      <div
        className={`${
           location.pathname === path
            ? "bg-blue-400 border-blue-500 "
            : "border-white bg-transparent"
        }  h-[2.3rem] w-[2.3rem] rounded-full flex items-center justify-center border `}
      >
        <p
          className={`${
             location.pathname === path ? "text-black" : "text-white"
          }  text-sm tracking-[0.1rem] uppercase font-bold`}
        >
          {num}
        </p>
      </div>
      <ul className="lg:flex lg:flex-col sm:hidden">
        <li className="text-gray-200 text-sm uppercase">Step {num}</li>
        <li className="text-[0.8rem] text-white font-bold uppercase ">
          {text}
        </li>
      </ul>
    </div>
  
      
    </div>
  )
}

export default SidebarList
