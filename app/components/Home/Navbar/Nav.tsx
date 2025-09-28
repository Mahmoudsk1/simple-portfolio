"use client"
import { NavLinks } from '@/app/constart/constart'
import { link } from 'fs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'

function Nav() {
const [navBg,setNavBg]= useState(false);

useEffect(()=>{
    const handler=()=>{
    if(window.scrollY >=90) setNavBg(true);
    if(window.scrollY < 90) setNavBg(false);   
    };
window.addEventListener("scroll", handler);
return ()=>
    window.removeEventListener("scroll", handler)


},[])


  return (
    <div className={'transition-all ${navBg ? "bg-[#0f142ed9] shadow-md:"fixed"} duration-200 h-[12vh] z-[10000] fixed w-full'}>
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
{/* LOGO */}
<div className="flex items-center space-x-2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">

<FaCode className="w-5 h-5 text-black" />
</div>
<h1 className="text-xl hidden sm:block md:text-5xl text-white font-bold">products</h1>
</div>

{/*navLinks */}
<div className="hidden lg:flex flex-10 justify-center items-center space-x-15">
    {NavLinks.map((link) => {
        return (
        <Link 
        key={link.id} 
        href={link.url} 
        className="text-3xl hover:text-cyan-300 text-white font-medium transition-all-200"
        >
       <p>{link.label}</p>
        </Link>
        );
    
    })}
</div>
  </div>
    </div>
  )
}

export default Nav