"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenuUnfold4Line, RiCloseLine } from "react-icons/ri";
import { MdOutlineAddHomeWork } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-2 px-4 relative shadow-xl">
      <Link href="/">
        <div className="flex items-center gap-2 text-primary font-itim text-2xl">
          <Image src="/images/logo2.png" alt='logo' width={100} height={100} />
        
          <span>LocaTunisie</span>
        </div>
      </Link>

      {/* Desktop menu */}
      <div className="font-motserrat lg:flex items-center gap-4 hidden">
        <Link
          href="/"
          className="transition-colors duration-200 hover:text-secondary"
        >
          Accueil
        </Link>
        <Link
          href="/logements"
          className="transition-colors duration-200 hover:text-secondary"
        >
          Logements
        </Link>
        <Link
          href="/inscription"
          className="transition-colors duration-200 hover:text-secondary"
        >
          Inscription
        </Link>
        <Link
          href="/contact"
          className="transition-colors duration-200 hover:text-secondary"
        >
          Contact
        </Link>
        <button className="bg-secondary text-white py-2 px-4 rounded-3xl transition-all duration-200 hover:opacity-90">
          Connexion
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden z-200">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <RiCloseLine size={30} className="text-primary" />
          ) : (
            <RiMenuUnfold4Line size={30} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden absolute top-24 right-0 w-full bg-white px-4 py-4 font-motserrat flex flex-col items-center gap-4 shadow-md
        transition-all duration-300 ease-in-out 
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
      >
        <Link
          href="/"
          className="transition-colors duration-200 hover:text-secondary"
          onClick={toggleMenu}
        >
          Accueil
        </Link>
        <Link
          href="/logements"
          className="transition-colors duration-200 hover:text-secondary"
          onClick={toggleMenu}
        >
          Logements
        </Link>
        <Link
          href="/inscription"
          className="transition-colors duration-200 hover:text-secondary"
          onClick={toggleMenu}
        >
          Inscription
        </Link>
        <Link
          href="/contact"
          className="transition-colors duration-200 hover:text-secondary"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <button className="bg-secondary text-white py-2 px-4 rounded-3xl transition-all duration-200 hover:opacity-90">
          Connexion
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
