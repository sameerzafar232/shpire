"use client"
// components/Menu.tsx
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Image from "next/image";

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
<>
<nav className="md:flex gap-6 justify-center p-2 border-b mb-2 flex-col md:flex-row bg-white hidden mt-4 ">
    

    <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   NEW IN
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   WOMEN
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    MEN
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   KIDS
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
   BEAUTY
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    ACCESSORIES
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
    HOME
   </a>
   <a
     href="#"
     className="hover:text-gray-300 cursor-pointer transition duration-300 border-b-2 border-gray-300 md:border-none"
   >
THE EDIT
   </a>
 

</nav> 

    <nav className="flex flex-col md:flex-row bg-white p-2 border-b mb-2  md:hidden mt-4">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/new.webp" alt="Logo" width={0} height={0} className="h-8 w-auto cursor-pointer" />
        </div>
        <div className="md:hidden">
          <IoMenu className="text-black text-2xl  cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      {showMenu && (
        <div className="md:flex flex-col flex  md:flex-row md:justify-center">
          <a href="#" className="nav-link border-b-2 border-gray-300 ">NEW IN</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">WOMEN</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">MEN</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">KIDS</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">BEAUTY</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">ACCESSORIES</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">HOME</a>
          <a href="#" className="nav-link border-b-2 border-gray-300 ">THE EDIT</a>
    
        </div>
      )}
    </nav>
</>
   
  );
};

export default Menu;