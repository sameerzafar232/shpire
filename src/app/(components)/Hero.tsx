import React from 'react'
import { FC } from "react";

import Image from "next/image";

const Hero:FC = () => {
 
  return (
<>
<div className="container bg-hero min-h-screen  bg-no-repeat mx-auto p-8 flex flex-col md:flex-row justify-end items-center md:items-start">
<div className="b text-white py-12 px-4 first-line:">
      <h1 className="text-4xl text-center font-bold  mt-36">LAWN'24 </h1>
      <p className='text-xl text-center'>UNSTITCHED</p>
      <div className="flex justify-center gap-4 flex-col md:flex-row">
       
        <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg focus:outline-none ">SHOP DAILY</button>
        <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg focus:outline-none">SHOP STATEMENT</button>
      
  
 <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg focus:outline-none">SHOP SIGNATURE</button>
        <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg focus:outline-none">SHOPJACQUARD</button>

      
      </div>
    </div>

{/* <div className="w-full md:w-1/2 mt-4 md:mt-0">
<Image src="" alt="Logo" width={1800} height={1200} objectFit="cover" className=" hero" />

</div> */}
</div>

</>
  )
}

export default Hero