// pages/login.js

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(email)
   router.push('./weather')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
            Log in
          </button>
        </form>
        <div className='flex items-center mt-11'>
        <p className='pr-4'>Don't have an account?</p>
        <Link href={"/signup"}><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-[200px]">Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
