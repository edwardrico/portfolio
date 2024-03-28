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
            <h4>Bonjour, je suis</h4>
            <h1>Edward Almedo</h1>
            <h4 className="text-light">Développeur Full Stack</h4>
         
            <Button/>
            <div className="header-text">
            <p> 
            Après une immersion totale en tant que concepteur d'applications web et mobiles à l'école Ada<br></br>
            Tech School, je suis prêt à mettre en pratique toutes mes compétences fraîchement acquises. <br></br> 
            Mon portfolio regorge d'exemples concrets de mon travail, démontrant ma capacité à créer des <br></br>
            solutions innovantes et efficaces. Je suis passionné par le développement et toujours avide de <br></br>
            relever de nouveaux défis. N'hésitez pas à me contacter pour découvrir comment je peux<br></br>
            contribuer à votre équipe et apporter une valeur ajoutée à vos projets.<br></br> 
           
            </p>
            </div>
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