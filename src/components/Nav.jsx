import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import headerLogo from '../assets/Logo.svg'; // dein Logo-Pfad anpassen
import { navLinks } from '../constants'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="max-w-[1050px] mx-auto px-4 flex items-center justify-between h-[60px]">

        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900">
          <a href="/">
            <img src={headerLogo} alt="Logo" className="w-32" />
          </a>
        </div>

        {/* Hamburger Icon (mobil) */}
        <div className="md:hidden z-20">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-900 text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation */}
        <ul
          className={`md:flex md:items-center md:static gap-10 absolute top-0 left-0 w-full h-screen md:h-auto bg-white md:bg-transparent transition-transform duration-500 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 pt-24 md:pt-0 flex-col md:flex-row gap-10 px-10`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
