import React from 'react'
import { IoHome } from "react-icons/io5";

const Header = () => {
  return (
    <header className='text-3xl  font-itim text-center py-2 bg-secondary text-white flex flex-item items-center justify-center gap-2'>
        <IoHome />
        <p >LocaTunisie</p>
    </header>
  )
}

export default Header