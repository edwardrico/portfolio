import React from 'react';
import './about.css'
import AboutNav from './AboutNav.jsx';
import Yo from '../../assets/imageEdward.jpg';


const About = () => {
    return (
       <section id="about">
              <h1>A propos</h1>

              <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={Yo} alt="about-me-img" />
                    </div>
                </div>
                <div className="about-content">
                        
                    <p>Je m'appelle Edward Almedo et j'ai travaillé pendant 13 ans dans le domaine de la cuisine. J'ai commencé ma carrière en tant que commis de cuisine, où j'ai appris les bases de la préparation des aliments et de la gestion de la cuisine. Au fil des ans, j'ai gravi les échelons et j'ai finalement atteint le poste de chef de cuisine.
                    Cependant, après toutes ces années dans la cuisine, j'ai décidé de me reconvertir dans le développement web et mobile. J'ai été motivé par ma passion pour les nouvelles technologies et mon désir de me tourner vers l'avenir. J'ai donc commencé à étudier et à me former chez ADA TECH SCHOOL. 
                    Aujourd'hui, je suis fier de dire que je suis développeur web et mobile. J'ai appris à coder et à concevoir des sites web et des applications mobiles, et j'ai découvert un tout nouveau monde passionnant et stimulant Bien que j'aie adoré travailler dans la cuisine, je suis heureux d'avoir pris le risque de changer de carrière et de découvrir quelque chose de nouveau.
                    Je suis convaincu que mes compétences en cuisine, comme la gestion du temps, la créativité et la capacité à travailler sous pression, sont des atouts précieux dans mon nouveau domaine. Je suis impatient de continuer à apprendre et à grandir en tant que développeur web et mobile, et de voir où cette nouvelle carrière me mènera.
                    </p>
                    <div className="about-me-nav">
                        <AboutNav/>
                        </div>
                </div>
                </div>
        </section>
    );
};

export default About;