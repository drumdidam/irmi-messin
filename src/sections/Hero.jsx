import React from 'react';
import headerLogo from '../assets/Logo.svg';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="h-screen flex">
      {/* Linke Seite: Text */}
      <div className="w-1/3 flex items-center justify-center bg-white px-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Willkommen</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hier ist dein Hero-Text. Sag etwas über dich oder dein Projekt.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded">
            Mehr erfahren
          </button>
        </div>
      </div>

      {/* Rechte Seite: Bild */}
      <div className="w-2/3 flex items-center justify-center bg-white">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
