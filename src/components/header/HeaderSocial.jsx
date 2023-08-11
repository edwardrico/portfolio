import React from 'react';
import './header.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href = "https://www.linkedin.com/in/edward-almedo/" targer ="_blank"><BsLinkedin/></a>
            <a href ="https://github.com/edwardrico" targer ="_blank"><FaGithub/></a> 
            <a href ="https://www.instagram.com/edward_almedo/"targer ="_blank"><BsInstagram/></a> 
        </div>
    );
};

export default HeaderSocial;