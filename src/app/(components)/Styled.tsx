import React from 'react'
import { FC } from "react";

import Image from "next/image";

const Styled:FC = () => {
  return (
   
    <>
    <div className='bg-orange-50 mt-4'>
    <div>

    <h1 className="text-xl font-bold font-serif mb-4 text-center">STYLED BY YOU</h1>
        <p className=" text-center ">#SAPPHIREXME</p>

    </div>
   
    <div className="rounded-lg shadow-lg overflow-hidden flex justify-center gap-4 flex-col md:flex-row">
    <div className="p-2">
      <Image src="/mahnoor.webp" alt="Logo" width={300} height={400} className="" />
      
        <h2 className=" font-bold text-center">MAHNOOR RAHIM</h2>
      
        <h3 className=" text-center cursor-pointer">@mahnoorrahin</h3>
        <h3 className=" text-center">wearing our</h3>
        <h3 className=" text-center">Printed cambric shirt</h3>
      </div>
      <div className="p-2"></div>

      <div className="p-2">
      <Image src="/tashfeen.webp" alt="Logo" width={300} height={400} className="" />
      <h2 className=" font-bold text-center">RAFIA MINHAS KHAN</h2>
      
      <h3 className=" text-center cursor-pointer">@rafiaminhaskhan</h3>
      <h3 className=" text-center">wearing our</h3>
      <h3 className=" text-center">2 Piece-printed cambric shirt</h3>
    </div>
      
      <div className="p-2">
      <Image src="/rafia1.webp" alt="Logo" width={300} height={400} className="" />
      <h2 className=" font-bold text-center">TASHFEEN ARSHAD</h2>
      
      <h3 className=" text-center cursor-pointer">@tashfeenarshad</h3>
      <h3 className=" text-center">wearing our</h3>
      <h3 className=" text-center">3 piece printed silk suit</h3>
    </div>


      <div className="p-2">

      <Image src="/rafia2.webp" alt="Logo" width={300} height={400} className="" />
     <h2 className=" font-bold text-center">RAFYA MINHAS KHAN</h2>
      
        <h3 className=" text-center cursor-pointer">@rafyaminhaskhan</h3>
        <h3 className=" text-center">wearing our</h3>
        <h3 className=" text-center">printed cambric shirt</h3>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Styled