// importation de tous les depondents a utiliser et aussi de les fichier de nos 
// composents
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Project from './components/projets/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Technologies from'./components/technologies/Technologies';

const App = () => {
  return (
    // on importe tous les composants dans le composant App pour les faire 
    //affichier..
    <>
      <Header />
      <About />
      <Technologies/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  
  );
};

export default App;