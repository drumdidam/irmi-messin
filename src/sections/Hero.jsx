import React from 'react';
import headerLogo from '../assets/Logo.svg';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between md:px-16 bg-white">

      {/* Linke Seite – Logo + Text */}
      <div className="flex flex-col items-start text-left w-full md:w-1/3 mb-10 md:mb-0">
        <img src={headerLogo} alt="Logo" className="w-48 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Willkommen auf meiner Seite
        </h1>
        <p className="text-lg text-gray-700">
          Hier findest du Informationen über mich, meine Musik und aktuelle Projekte.
        </p>
      </div>

      {/* Rechte Seite – Bild */}
      <div className="w-full md:w-2/3 flex justify-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto max-w-md rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
