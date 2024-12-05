
// import Link from "next/link";

import React, { useState } from 'react'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="">
    <div className=' min-h-screen main-color flex justify-center items-center '>
        <div className=" w-full flex justify-center items-center flex-col">
          <img src="/avataaars.svg" className='w-[230px]' alt="" />
          <h1 className='uppercase text-4xl font-bold text-white pt-8'>start framework</h1>
          <div className="flex justify-between px-12 pt-5">
          <div className="border-b-4 me-3 border-white h-3 w-[100px]"></div>
          <i className='fa-solid fa-star text-white'></i>
          <div className="border-b-4 ms-3 border-white h-3 w-[100px]"></div>
            
            </div> 
            <p className='text-white pt-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </div>
  )
} 