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

  <main className="relative flex flex-col bg-black bg-cover">
    <ParallaxProvider>
      <Hero />
    </ParallaxProvider>
    <Navbar />
    <section className="">
      <Quote />
    </section>
    <section className="">
      <Bio />
    </section>
    <section className="">
      <Media />
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
