"use client"
import React, { FC, FormEvent, useState } from 'react';
import "../globals.css";
import Footer from '../(components)/Footer';
const Register: FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      name,
      company,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User created successfully');
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<>
<form className="w-full max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg border-2 border-gray-400 transform transition-transform duration-500 hover:scale-105" onSubmit={handleSubmit}>
    <h2 className="text-3xl font-bold mb-5 text-black text-center">Register</h2>
    <div className="mb-6">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        id="name"
        type="text"
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
      <input
        id="company"
        type="text"
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Address"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        id="email"
        type="email"
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input
        id="password"
        type="password"
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <button
        className="bg-gray-300   hover:bg-gray-700  text-black font-bold py-3 px-8 rounded-full w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        type="submit"
      >
        Register
      </button>
    </div>
  </form>

  <Footer/>

</>

  
  );
};

export default Register;