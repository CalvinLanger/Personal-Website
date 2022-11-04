import React from 'react';

import './App.css';
import './MediaQuerys.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container grid">
        <Header />
        <main class="main">
          <Home />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
