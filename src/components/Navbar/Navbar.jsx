import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  let [padd, setPadd] = useState(true);
  let [open, setOpen] = useState(true);
  function change(scroll) {
    (scroll > 38) ? setPadd(false) : setPadd(true);
  }
  useEffect(() => {
    function handleScroll() {
      change(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
  }, [])

  function display(){
    setOpen(!open);
    
  }
  return (
    <div>
      <nav className='fixed right-0 top-0 left-0 z-50 shadow-md bg-gray-700 text-white'>
        <div className="max-w-screen-xl mx-auto">
          <div className={padd ? "container mx-auto flex justify-between items-center py-8 p-4 transition-all duration-700" : "container mx-auto flex justify-between transition-all duration-700 items-center py-4 p-4"}>
            <h1 className='flex items-center gap-2'>
             <Link><span className='text-3xl font-bold text-white uppercase'>Start Framework</span></Link> 
            </h1>
            <ul className='hidden md:flex justify-between gap-8 text-gray-800 font-medium '>
              <li className=' uppercase text-white'><NavLink to="about" className="p-3">about</NavLink></li>
              <li className=' uppercase text-white'><NavLink to="portfolio" className="p-3">portfolio</NavLink></li>
              <li className=' uppercase text-white'><NavLink to="contact" className="p-3">contact</NavLink></li>
            </ul>
            <button onClick={display} className='md:hidden'>
              <i className="fa-solid fa-bars fa-xl text-lime-300 bg-gray-800"></i>
            </button>
          </div>
          <div className={open?'hidden':'block'}>
              <ul className='hidden max-md:flex flex-col justify-center items-center py-5 gap-8 text-gray-800 font-medium transition-all duration-500'>
                <li className=' uppercase text-white'><NavLink to="about" className="p-3">about</NavLink></li>
                <li className=' uppercase text-white'><NavLink to="portfolio" className="p-3">portfolio</NavLink></li>
                <li className=' uppercase text-white'><NavLink to="contact" className="p-3">contact</NavLink></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
