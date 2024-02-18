




// components/Footer.js

import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6">
      <div className="container mx-auto flex justify-center items-center flex-col md:flex-row md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">CONTACT US</h3>
          <p>Sapphire Retail Head Office</p>
          <p>1.5-Km, Defence Road, Bhobtian Chowk,</p>
          <p>Off Raiwind Road, Opposite University of Lahore,</p>
          <p>Lahore.</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">CUSTOMER CARE</h3>
          <ul>
            <li>Exchanges & Returns</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">INFORMATION</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>SafePay Guide</li>
            <li>Payments</li>
            <li>Store Locator</li>
            <li>Fabric Glossary</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex justify-center items-center flex-col md:flex-row">
        <div className="flex items-center">
          <FiMail className="mr-2" />
          <p>wecare@sapphireonline.pk</p>
        </div>
        <div className="flex items-center ml-8">
          <FiPhone className="mr-2" />
          <p>+92(0)42 111-738-245</p>
        </div>
        <div className="flex items-center ml-8">
          <FiMapPin className="mr-2" />
          <p>Lahore, Pakistan</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; COPYRIGHT 2024 SAMEER</p>
      </div>
    </footer>
  );
};

export default Footer;



// import React from 'react'
// import { FC } from "react";
// import {
//     FaDribbbleSquare,
//     FaFacebookSquare,
//     FaGithubSquare,
//     FaInstagram,
//     FaTwitterSquare,
//   } from 'react-icons/fa';
// import Image from "next/image";

// const Footer:FC = () => {
//   return (
//  <>


//   <div className='max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 bg-gray-100 mt-10'>
//       <div>
//       <div className='text-center'>
//         <h3 className=' text-black '>Solutions</h3>
//         <ul>
//             <li className='py-2 text-sm'>Analytics</li>
//             <li className='py-2 text-sm'>Marketing</li>
//             <li className='py-2 text-sm'>Commerce</li>
//             <li className='py-2 text-sm'>Insights</li>
//         </ul>
//     </div>
//         {/* <h1 className='w-full text-3xl font-bold text-b'>Learnify Academy</h1>
//         <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p> */}
//         <div className='flex justify-between md:w-[75%] my-6'>
//             <FaFacebookSquare size={30} />
//             <FaInstagram size={30} />
//             <FaTwitterSquare size={30} />
//             <FaGithubSquare size={30} />
//             <FaDribbbleSquare size={30} />
//         </div>
//       </div>
//       <div className='lg:col-span-2 flex justify-between mt-6'>
//     <div>
//         <h6 className='font-medium text-black'>Solutions</h6>
//         <ul>
//             <li className='py-2 text-sm'>Analytics</li>
//             <li className='py-2 text-sm'>Marketing</li>
//             <li className='py-2 text-sm'>Commerce</li>
//             <li className='py-2 text-sm'>Insights</li>
//         </ul>
//     </div>
//     <div>
//         <h6 className='font-medium text-black'>Support</h6>
//         <ul>
//             <li className='py-2 text-sm'>Pricing</li>
//             <li className='py-2 text-sm'>Documentation</li>
//             <li className='py-2 text-sm'>Guides</li>
//             <li className='py-2 text-sm'>API Status</li>
//         </ul>
//     </div>
//     <div>
//         <h6 className='font-medium text-black'>Company</h6>
//         <ul>
//             <li className='py-2 text-sm'>About</li>
//             <li className='py-2 text-sm'>Blog</li>
//             <li className='py-2 text-sm'>Jobs</li>
//             <li className='py-2 text-sm'>Press</li>
//             <li className='py-2 text-sm'>Careers</li>
//         </ul>
//     </div>
//     <div>
//         <h6 className='font-medium text-b'>Legal</h6>
//         <ul>
//             <li className='py-2 text-sm'>Claim</li>
//             <li className='py-2 text-sm'>Policy</li>
//             <li className='py-2 text-sm'>Terms</li>
//         </ul>
//     </div>
//       </div>
//     </div>
//  </>
//   )
// }

// export default Footer