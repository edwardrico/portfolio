import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';


const Footer = () => {
    return (
        <footer>
              <div className='footer-social'>
            <a href ="https://www.linkedin.com/in/edward-almedo/" targer ="_blank"><BsLinkedin/></a>
            <a href ="https://github.com/edwardrico" targer ="_blank"><FaGithub/></a> 
            <a href ="https://www.instagram.com/edward_almedo/"targer ="_blank"><BsInstagram/></a> 
            </div>

        <div className='footer'>
            <p>© 2023 Edward Almedo. All rights reserved | Propulsé par <a href="https://siteoptimix.com/" target="_blank">SiteOptimix</a><br/>
                Create with React.js and CSS </p>
            </div>
        </footer>
    )
};

export default Footer;