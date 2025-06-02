import React, { useState, useEffect } from 'react';
import './index.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Bio from './sections/Bio'
import FSHeaderImage from './assets/FS_Header.jpeg';
import LogoAnimation from './assets/Handwritting.webm'

const App = () => (

  <main className="relative">
    <div className="flex items-center justify-center w-screen h-screen border-amber-400 border-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${FSHeaderImage})` }}
    >
      <Nav />

      <video
        src={LogoAnimation}
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-1/2 left-1/2 items-center border-4 border-red-500 z-40 "
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
    <section className="p-10">
      <Bio />
    </section>
    <section className="p-10">
      Media
    </section>
    <section className="p-10">
      Composition
    </section>
    <section className="p-10">
      Gallery
    </section>
  </main >
);

export default App
