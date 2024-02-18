import React from 'react'
import { FC } from "react";

import Image from "next/image";

const New:FC = () => {
  return (
<>
<div className='flex justify-between flex-col md:flex-row'>
<h1 className="text-xl  mt-20 ml-4">WHAT'S
NEW</h1>
    <div className=" rounded-lg  p-6">
      <Image src="/women.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Spring sympohny</h2>
    </div>

    <div className=" rounded-lg  p-6">
      <Image src="/sing.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Signature law 24</h2>
    </div>
    <div className=" rounded-lg  p-6">
      <Image src="/style.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Styled by Yumna zaidi</h2>
    </div>

    <div className=" rounded-lg  p-6">
      <Image src="/kids.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Kids new arrival</h2>
    </div>

    <div className=" rounded-lg  p-6">
      <Image src="/main.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Main spring summer</h2>
    </div>


    <div className=" rounded-lg  p-6">
      <Image src="/foot.png" alt="Logo" width={0} height={0} className="rounded-full w-32 h-32 mb-4 mx-auto border-4 cursor-pointer  hover:scale-110" />
      <h2 className="text-xl  text-center">Footwear new arrivals</h2>
    </div>
    </div>
   </>
  )
}

export default New