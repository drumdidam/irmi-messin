import React from 'react';
import headerLogo from '../assets/Logo.svg';
import HeroImg from '../assets/Hero.webp'
import Handwritting from '../assets/Logo_white.webm'
import { Parallax, useParallax } from 'react-scroll-parallax';


const Hero = () => {
  const parallax = useParallax({ speed: -30 });
  return (
    <div className="flex w-screen h-screen bg-black bg-cover">
      <div
        className="p-10 absolute left-1/2 -translate-x-1/2 z-50 top-0 -translate-y-0"
      >
        <video
          src={Handwritting}
          alt="Logo"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
        </video>
      </div>
      <div className="flex flex-col justify-items-center w-1/3 sm:w-1/2">
        <div
          className="flex w-full h-1/3"
        >
        </div>
        <div
          className="z-50 flex p-20 items-center w-full h-2/3"
        >
          <nav
            className="flex flex-col space-y-5 p-10"
          >
            <a href="#bio" className="text-4xl relative group text-white">
              Bio

              {/* Animation */}
              <span className="absolute right-0 -top-1 w-0 h-0.5 bg-white origin-right transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white origin-left transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#composition" className="text-4xl relative group text-white">
              Composition
              {/* Animation */}
              <span className="absolute right-0 -top-1 w-0 h-0.5 bg-white origin-right transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white origin-left transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#media" className="text-4xl relative group text-white">
              Media
              <span className="absolute right-0 -top-1 w-0 h-0.5 bg-white origin-right transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white origin-left transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-4xl relative group text-white">
              Contact
              <span className="absolute right-0 -top-1 w-0 h-0.5 bg-white origin-right transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white origin-left transition-all duration-300 group-hover:w-full"></span>

            </a>
          </nav>
        </div>
      </div>
      <div
        className="w-2/3"
        ref={parallax.ref}
      >
        <img
          src={HeroImg}
          alt="Hero"
          className="object-cover w-full h-full"
        >
        </img>
      </div>

    </div>

  );
};

export default Hero;
