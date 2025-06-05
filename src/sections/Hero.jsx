import React from 'react';
import headerLogo from '../assets/Logo.svg';
import HeroImg from '../assets/Hero.webp'
import Handwritting from '../assets/Handwritting_W85.webm'
import { Parallax, useParallax } from 'react-scroll-parallax';


const Hero = () => {
  const parallax = useParallax({ speed: -30 });

  return (
    <div className="relative flex w-screen h-screen bg-primary overflow-hidden">

      {/* VIDEO OVERLAY */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-[80vw] md:max-w-[1200px] sm:max-w-[600px]">
        <video
          src={Handwritting}
          autoPlay
          muted
          playsInline
          className="w-full h-auto object-contain"
        />
      </div>

      {/* NAVIGATION */}
      <div className="flex flex-col justify-items-center w-1/3 sm:w-1/2 z-10">
        <div className="flex w-full h-1/3" />
        <div className="z-10 flex p-10 items-center w-full h-2/3">
          <nav className="flex flex-col space-y-5">
            {["Bio", "Composition", "Media", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-6xl relative group text-secondary"
              >
                {label}
                <span className="absolute right-0 -top-1 w-0 h-0.5 bg-secondary origin-right transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary origin-left transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* PARALLAX IMAGE */}
      <div className="w-2/3" ref={parallax.ref}>
        <img
          src={HeroImg}
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
