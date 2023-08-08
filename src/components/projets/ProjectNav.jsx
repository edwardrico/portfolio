import React from 'react';
import './project.css';
import {FaHome} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {IoIosContact} from 'react-icons/io';
import {SiAboutdotme} from 'react-icons/si';


const ProjectNav = () => {
    return (
        <div className='project-nav'>
            <a href = "#header"><FaHome/></a>
            <a href = "#about"><SiAboutdotme/></a>
            <a href = "#technology"><GiSkills/></a>
            <a href = "#contact"><IoIosContact/></a>
            
        </div>
    );
};

export default ProjectNav;