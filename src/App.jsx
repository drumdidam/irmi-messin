import React from 'react';
import './App.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'

const App = () => (
  <main className="relative">
    <header className="p-10">
      <Nav />
    </header>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="p-10">
      Bio
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
  </main>
);

export default App
