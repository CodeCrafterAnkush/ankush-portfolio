"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const navLinks =[
    {title : "About", path: "#about"},
    {title : "Portfolio", path: "#portfolio"},
    {title : "Satck", path: "#stack"},
    {title : "Contact", path: "#contact"},
]

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const togaleNav = () => {
      setNav(!nav);
    }
     const closeNav= () => {
       setNav(false)
     }
     
    
  return (
    <div className='z-50 fixed flex justify-center w-full text-white font-bold '>
      <div className=' border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto '>

      <ul className='flex flex-row p-2 space-x-8'>
        {navLinks.map((link, index)=>(
            <li key={index}>
                <Link href={link.path} className=' transform hover:text-white/50 tarnsition-all duration-300 ease-in-out'>{link.title}</Link>
            </li>
        ))}

      </ul>

      </div>

      <div onClick={togaleNav} className='md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2 '>
            {nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
      </div>
      <div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${nav ? 'translate-x-0':'-translate-x-full'}`}>

      </div>
    </div>
  )
}

export default Navbar
