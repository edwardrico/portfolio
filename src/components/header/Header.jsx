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
            <h4 className="text-light">Développeur Fullstack</h4>
           
            <Button/>
            <p> À la recherche active d'une alternance dès septembre - octobre 2023<br></br>
             après une immersion totale en tant que concepteur d'applications web<br></br>
             et mobiles à l'école Ada Tech School, je suis prêt à mettre en pratique<br></br> 
             toutes mes compétences fraîchement acquises. Mon portfolio contient<br></br>
             toutes les informations essentielles pour m'aider à décrocher cette <br></br>
             opportunité d'alternance. Votre soutien est essentiel, alors n'hésitez<br></br>
             pas à me contacter pour un entretien, je serais ravi de vous en dire<br></br> 
             plus sur moi. 
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