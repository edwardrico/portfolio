import React from 'react';
import './header.css';
import Button from './Button';
import HeaderSocial from './HeaderSocial';
import Photo from '../../assets/photo-2.png';
import Nav from './Nav';

const Header = () => {
    return (
        <section id="header">
       <header>
        
        <div>
          <Nav/>
        
        </div>
           <div className ="container header_container">
            <h4>Bonjour je suis</h4>
            <h1>Edward Almedo</h1>
            <h4 className="text-light">Developpeur Fullstack</h4>
           
            <Button/>
            <p> En recherche de "ALTERNACE" a partir de Septembre - Octobre 
                2023<br/>apres de une arrechisant formation de concepteur de aplication<br/>
                 web et mobil dans l'ecole Ada tech school c'est le moment de mettre<br/>
                 tous le concept et connaisent apris pour dans la formation pour ça<br/>
                 vous trouvaire dans mon pourtafolio tous les information neceressaire<br/>
                 pour reaussir a trouve cette alternance je compter sur vous. 
            </p>
            <HeaderSocial/>
            
            <div className="photo">
                <img src={Photo} alt="Edward Almedo"/>
            
            </div>
            <a href="#contact" className="scroll_down">Descendre</a>
          
          </div>
          
       </header>
        </section>
    );
};

export default Header;