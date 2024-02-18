
"use client"
import React, { FC, useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdAccountCircle, MdClose } from "react-icons/md";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Menu from './Menu';
import { FaSearch } from "react-icons/fa";
const Navbar: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopuped = () => {
    setIsOpened(!isOpened);
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful. User data:', data);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmited = () => {
    setIsOpened(false); // Close the popup when the Submit button is clicked
    // Add logic for handling form submission if needed
  };

  return (
    <>
      <nav className="bg-white shadow-md flex md:justify-between px-4 py-2 gap-8">
      <div className="flex items-start">
      <Link href="/">
  <div className="mr-4 cursor-pointer">
    
  <Image src="/new.webp" alt="Logo" className="mr-4 cursor-pointer" width={150} height={40} />
  </div>
</Link>
        
      
    
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-gray-300 -500 text-2xl mb-4">Choose Your Location</h2>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                <input type="text" id="city" name="city" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="zone" className="block text-gray-700 mb-2">Zone</label>
                <input type="text" id="zone" name="zone" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
              </div>
              <button className="bg-gray-300  text-white py-2 px-4 rounded-md" onClick={handleSubmited}>Submit</button>
            </div>
          </div>
        )}
      </div>
      <div className=" items-center cursor-pointer hidden  md:flex">
              {/* Center: Search Input */} 
              <div className="flex items-center justify-center p-2">
                <input
                  type="text"
                  placeholder="FIND YOUR FAVOURITES"
                  className="bg-white border px-4 py-2 rounded focus:outline-none w-96"
                  
                />
                <span className=" ml-2 cursor-pointer">
                <FaSearch />
                </span>
              </div>
            </div>
      <div className="flex items-center gap-6">
      
        {/* Account Icon */}
        <RiAccountPinBoxFill
          className="h-12 w-12 bg-gray-300 rounded-full p-2 cursor-pointer"
          onClick={togglePopuped}
        />

        {/* Popup */}
        {isOpened && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              {/* Close Icon */}
              <MdClose
                className="top-4 right-4 h-6 w-6 text-gray-500 cursor-pointer"
                onClick={handleSubmited}
              />
              <h2 className="text-black  text-2xl mb-4 text-center">{`Login & Register`}</h2>
              <form className="mb-4" onSubmit={handleSubmitLogin}>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                />
                <button type="submit" className="bg-gray-300 text-black  py-2 px-4 rounded-md w-full mb-4">
                  Login
                </button>
              </form>
              <div className="flex items-center justify-center mb-4">
                <hr className="border-gray-300 flex-grow" />
                <p className="mx-4 text-gray-500">OR</p>
                <hr className="border-gray-300 flex-grow" />
              </div>
              <Link href="/register" className="block" onClick={handleSubmited}>
                <button className="bg-gray-300  text-black  py-2 px-4 rounded-md w-full mb-4">
                  Register
                </button>
              </Link>
              <p className="text-center text-black  underline cursor-pointer">Forgot Password</p>
            </div>
          </div>
        )}
      </div>
    </nav>
    <Menu/>
    </>
  
  );
}

export default Navbar;


// "use client"
// import Link from 'next/link';
// import { FC, useState } from "react";
// import Image from "next/image";
// import { IoMenu } from "react-icons/io5";

// import { IoIosContact } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { GoLaw } from "react-icons/go";







// const Navbar: FC = () => {

// const [showbar,setshowbar] = useState(false)

//   return (
//     <div>
//       {/* // Navbar */}
      // <div className=" ">
      //   <div className="bg-white border-b ">
          // <div className="container mx-auto flex items-center justify-between py-4">
          //   {/* Left Side: Logo */}
          //   <Image src="/new.webp" alt="Logo" width={200} height={100} />

            

//             {/* Right Side: Links */}
//             <div className="flex items-center gap-4">
//               {/* <div className="flex items-center  cursor-pointer">
//                 <span className=" mr-2 cursor-pointer">
//                 <IoIosContact />
//                 </span>
//                 <p className="mr-4">Login / Register</p>
//               </div> */}
//                 <div className="flex items-center ">
//         <div className="flex items-center ">
//         <Link href="/login">
//           <div className='cursor-pointer flex'>
//           {/* <span className="mr-2 mt-2">
//             <IoIosContact />
//           </span> */}
//           <p className="mr-4">Login</p>
//           </div>
//           </Link>
//           <Link href="/register">
//             <div className='flex cursor-pointer'>
//               <div className="h-6 mx-4">|</div>
//           <p className="mr-4">Register</p>
//           </div>
          
//           </Link>
//         </div>
        
//     </div>

//               <div className="h-6 mx-4">|</div>
//               <span className=" cursor-pointer">
//               <FaHeart />
//               </span>
//               <div className="h-6 mx-4">|</div>
//               <span className="cursor-pointer">
//               <FaShoppingCart />
//               </span>
//               <div className="h-6 mx-4">|</div>
//               <span className=" cursor-pointer">
//               <GoLaw />

//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

// {/* menu */}

//     </div>
//   )
   
// };

// export default Navbar;
