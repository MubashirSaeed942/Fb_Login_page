

import React from 'react'
import Image from 'next/image'
import facebook from '../components/4lCu2zih0ca.svg'

export default function login() {
  return (
    <main className='bg-gray-100 h-[100vh] flex justify-center'>

      <div className='flex flex-col justify-center -mt-14'>
        <div className='w-full flex justify-center mt-14'> 
          <Image 
            className='mx-auto' 
            src={facebook} 
            alt='image' 
            width={250} 
            height={250} 
          />
        </div>

        {/* Responsive width classes for different screens */}
        <div className='flex flex-col justify-center items-center h-[300px] w-full max-w-[29rem] mx-auto bg-white rounded-xl border-2 border-bg-gray-50'>
          <p className='text-lg mb-8'>Log in to Facebook</p>
          <div className='w-full px-4 ml-8'>
            <input 
              className='w-full max-w-[25rem] mb-1 h-11 border-2 border-bg-gray-50 rounded-lg outline-blue-500' 
              type='text' 
              placeholder='Email address or phone number' 
            />
            <input 
              className='w-full max-w-[25rem] h-11 border-2 border-bg-gray-50 rounded-lg outline-blue-500' 
              type='password' 
              placeholder='Password' 
            />
          </div>
          
          <button className='bg-blue-500 mt-3 text-white w-full max-w-[25rem] h-11 rounded-lg font-bold text-lg hover:bg-blue-600'>
            Log In
          </button>
          <p className='cursor-pointer text-blue-600 text-sm hover:underline'>
            Forgot Password? <span className='hover:underline'>Sign up for Facebook</span>
          </p>
        </div>
      </div>
    </main>
  )
}
