import React from "react";
import "./about.css";
import AboutNav from "./AboutNav.jsx";
import Yo from "../../assets/imageEdward.jpg";

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
          
            <p>Je suis Edward Almedo, originaire du Venezuela, et ma passion pour
            la cuisine a été mon moteur pendant plus de 13 ans. Mon aventure a
            débuté humblement en tant que commis, mais j'ai gravi rapidement les
            échelons jusqu'à devenir chef cuisinier.</p>
            <p>Récemment, ma fascination
            pour le développement web et mobile m'a ouvert une nouvelle voie,
            grâce à une formation à ADA TECH SCHOOL.</p>
            
            <p>Actuellement en pleine
            phase d'apprentissage, je me plonge avec enthousiasme dans le monde
            du codage et de la conception d'applications, tout en apportant des
            compétences solides de gestion du temps et de créativité héritées de
            ma formation culinaire. Je désire sincèrement l'opportunité d'un
            contrat d'alternance pour contribuer avec détermination à exceller
            et apporter ma perspective unique à votre équipe. N'hésitez pas à
            consulter mon portfolio pour découvrir mes réalisations au cours des
            8 derniers mois, et voir ce que j'ai accompli.</p>
          
          <div className="about-me-nav">
            <AboutNav />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
