import React from 'react';
import './contact.css';
import {FaHome} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {FaProjectDiagram} from 'react-icons/fa';
import {SiAboutdotme} from 'react-icons/si';


const ContactNav = () => {
    return (
           <div className='contact-nav'>
            <a href = "#header"><FaHome/></a>
            <a href = "#about"><SiAboutdotme/></a>
            <a href = "#technology"><GiSkills/></a>
            <a href = "#project"><FaProjectDiagram/></a>
            
       
        </div>
    );
};

export default ContactNav; 