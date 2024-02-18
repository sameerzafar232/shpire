import React from 'react'
import { FC } from "react";

import Image from "next/image";

const Shop:FC = () => {
  return (
<>
<h1 className="text-xl font-bold font-serif flex justify-center   mt-20 ml-4">SHOP BY CATEGORY</h1>


<div className='flex justify-between mt-10 gap-2 flex-col md:flex-row'>

    <div className="bg-white  overflow-hidden ">
      <Image src="/girl.png" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-center">READY TO WEAR</h1>
      </div>
    </div>

    
    <div className="bg-white   overflow-hidden">
      <Image src="/new.png" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-center">UNSTITCHED</h1>
      </div>
    </div>

    
    <div className="bg-white overflow-hidden">
      <Image src="/mains.png" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-center">MAN</h1>
      </div>
    </div>


    


    
    <div className="bg-white overflow-hidden">
      <Image src="/bag.png" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-center">ACCESSORIES</h1>
      </div>
    </div>
    </div>

    <h1 className="text-xl font-bold font-serif flex justify-center  mt-20 ml-4">TRENDING</h1>
    <div className='flex justify-between mt-10 gap-2  flex-col md:flex-row'>

    <div className="bg-white  overflow-hidden ">
      <Image src="/solid.png" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-2">
        <h2 className=" font-bold text-start">SOLID LAWN SHIRT</h2>
      
        <h3 className=" text-start">RS:4,590.00</h3>
      </div>
    </div>

    
    <div className="bg-white   overflow-hidden">
      <Image src="/lawn.webp" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-2">
        <h2 className=" font-bold text-start">PRINTED LAWN SHIRT</h2>
        
        <h3 className=" text-start">RS:5,990.00</h3>
      </div>
    </div>

    
    <div className="bg-white overflow-hidden">
      <Image src="/red.webp" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-2">
        <h2 className=" font-bold text-start"> EMBROIDERED ARABIC</h2>
        <h2 className=" font-bold text-start">LAWN SHIRT</h2>
        <h3 className=" text-start">RS:7,990.00</h3>
      </div>
    </div>


    
    <div className="bg-white overflow-hidden">
      <Image src="/sit.webp" alt="Logo" width={400} height={300} className="hero  hover:scale-110" />
      <div className="p-2">
        <h2 className=" font-bold text-start"> EMBROIDERED ARABIC</h2>
        <h2 className=" font-bold text-start">LAWN SHIRT</h2>
        <h3 className=" text-start">RS:4,590.00</h3>
      </div>
    </div>


    
  
    </div>



    <h1 className="text-xl font-bold font-serif flex justify-center  mt-20 ml-4">MORE TO EXPLORE</h1>
    <div className='flex justify-between mt-10  flex-col md:flex-row '>

    <div className="bg-white mt-8  overflow-hidden ">
      <Image src="/dress.webp" alt="Logo" width={500} height={400} className="hero  hover:scale-110" />
      <div className="p-2">
    
      </div>
    </div>

    
    <div className="bg-white   overflow-hidden">
      <Image src="/stary.webp" alt="Logo" width={600} height={500} className="hero  hover:scale-110" />
      <div className="p-2">
       
      </div>
    </div>

    
    <div className="bg-white mt-8 overflow-hidden">
      <Image src="/style.webp" alt="Logo" width={500} height={400} className="hero  hover:scale-110" />
      <div className="p-2">
     
      </div>
    </div>


    


    
  
    </div>
</>
  )
}

export default Shop