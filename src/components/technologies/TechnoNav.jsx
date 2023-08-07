import React from 'react';
import './technologies.css';
import {FaHome} from 'react-icons/fa';
import {SiAboutdotme} from 'react-icons/si';
import {FaProjectDiagram} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';



const TechnoNav = () => {
    return (
        
        <div className='techno-nav'>
            <a href = "#header"><FaHome/></a>
            <a href = "#about"><SiAboutdotme/></a>
            <a href = "#project"><FaProjectDiagram/></a>
            <a href = "#contact"><IoIosContact/></a>
            
        </div>
        
    );
};

export default TechnoNav;