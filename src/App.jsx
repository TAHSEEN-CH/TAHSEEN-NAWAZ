import React from 'react'
import Navbar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import WhatsAppButton from './Components/WhatsAppButton';
import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();

  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="about"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App