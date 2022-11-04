import React from 'react';

import './App.css';
import './MediaQuerys.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function error() {
  alert('function in bulding...');
}

function App() {
  return (
    <div>
      <div className="container grid">
        <Header toError={error} />
        <main class="main">
          <Home />
          <About />
          <Skills />
          <Contact toError={error} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
