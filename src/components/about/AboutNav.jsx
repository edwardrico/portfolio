import React from 'react';
import {FaHome} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {FaProjectDiagram} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';

const AboutNav = () => {
    return (
        <div className='about-nav'>
            <a href = "#header"><FaHome/></a>
            <a href = "#technology"><GiSkills/></a>
            <a href = "#project"><FaProjectDiagram/></a>
            <a href = "#contact"><IoIosContact/></a>
            
        </div>
    );
};

export default AboutNav;