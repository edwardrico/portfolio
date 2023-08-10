import React from 'react';
import './header.css';


const Nav = () => {
    return (
        // creer bar de navegation de tous les section 
        <nav className='nav'>
            <ul>
                
                <li><a href="#about">A propos</a></li>
                <li><a href="#technology">Techno</a></li>
                <li><a href="#project">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </nav>
    );
};

export default Nav;