
import React, { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import headerLogo from '../assets/Logo.svg'; // dein Logo-Pfad
import { navLinks } from '../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <img src={headerLogo} alt="Logo" className="h-10" />

          {/* Desktop Nav */}

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a href={link.href} className="text-black font-bold relative">
                  {link.label}

                  {/* obere Linie (schwarz), wächst von rechts nach links */}
                  <span className="absolute right-0 -top-1 w-0 h-0.5 bg-black origin-right transition-all duration-300 group-hover:w-full"></span>

                  {/* untere Linie (weiß), wächst von links nach rechts */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black origin-left transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-3xl text-gray-800">
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-4">
            <ul className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="block text-gray-800 hover:text-blue-600 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Trigger für Sichtbarkeit (z. B. kurz oberhalb von Section 2) */}
      <div ref={triggerRef} className="absolute top-[100vh]" />
    </>
  );
};

export default Navbar;

