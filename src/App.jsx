import React, { useState, useEffect } from 'react';
import './index.css'

import Nav from './components/Nav'
import Navbar from './components/Nav'

import Hero from './sections/Hero'
import Quote from './sections/Quote'
import Bio from './sections/Bio'

import FSHeaderImage from './assets/FS_Header.jpeg';
import LogoAnimation from './assets/Handwritting.webm'
import { ParallaxProvider } from 'react-scroll-parallax';
import Media from './sections/Media';

const App = () => (

  <ParallaxProvider>
    <main className="relative h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>
      <Navbar />
      <section className="snap-start h-screen">
        <Quote />
      </section>
      <section id="about-me" className="snap-start">
        <Bio />
      </section>
      <section id="records" className="snap-start h-screen">
        <Media />
      </section>
      <section id="composition" className="snap-start h-screen">
        Composition
      </section>
      <section className="h-screen snap-start">
        Gallery
      </section>
    </main >

  </ParallaxProvider>
);

export default App
