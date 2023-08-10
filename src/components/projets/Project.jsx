 import React from 'react';
import './project.css';
import pico from '../../assets/pico-8.jpg';
import api from '../../assets/travel-time.jpg';
import php from '../../assets/php.jpg';
import meublea from '../../assets/meublea.jpg';
import ProjectNav from './ProjectNav';
import {FaGithub} from 'react-icons/fa';



const Project = () => {
    return (
       <section id='project'>
        <h1>Projets</h1>  
        <ProjectNav/>
        <div className='project-container'>
            <article className='project-item'>
                <div className='project-item-img'>
                    <img src={pico} alt='pico-8'/>
                    <h3>Les Mousquetaires</h3>
                    <a href='https://github.com/edwardrico/projet-collectif---pico8-les-mousquetaires'className='btn' target='_blank'><FaGithub/></a>

                    </div>
                </article>
            <article className='project-item'>
                <div className='project-item-img'>
                    <img src={api} alt='dataviz'/>
                    <h3>Travel Time</h3>
                    <a href='https://github.com/edwardrico/projet-collectif---dataviz-api-thebestgroup'className='btn' target='_blank'><FaGithub/></a>

                    </div>
                </article>
            <article className='project-item'>
                <div className='project-item-img'>
                    <img src={php} alt='red-social'/>
                    <h3>Let's Talk Tech</h3>
                    <a href='https://github.com/edwardrico/projet-collectif---pico8-les-mousquetaires'className='btn' target='_blank'><FaGithub/></a>

                    </div>
                </article>
            <article className='project-item'>
                <div className='project-item-img'>
                    <img src={meublea} alt='pico-8'/>
                    <h3>Meublea</h3>
                    <a href='https://github.com/edwardrico/projet-collectif---plateforme-de-vente-de-meubles-meublea'className='btn' target='_blank'><FaGithub/></a>

                    </div>
                </article>
            </div>
       
        </section> 
)};

export default Project