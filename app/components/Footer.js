import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-wrap items-center justify-between bg-secondary font-medium text-white  p-4'>
        <p>LocaTunisie © 2025</p> 
        <Link href="/contact"><p className='hover:underlineL'>Contact Us</p></Link>
        <div className='flex items-center gap-4'>
            <FaFacebook size={24} className=' transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-700'/>
            <FaInstagram size={24}  className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-pink-500'/>
            <FaTiktok size={24} className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-black'/>
        </div>
    </footer>
  )
}

export default Footer