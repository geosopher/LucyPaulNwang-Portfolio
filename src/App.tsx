/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="antialiased text-slate selection:bg-tiffany/30 selection:text-navy relative bg-white min-h-screen overflow-x-hidden">
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-tiffany opacity-5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-tiffany opacity-5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
