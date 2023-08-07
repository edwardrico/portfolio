// Technologies.jsx
import React from 'react';
import './technologies.css';
import TechnoNav from './TechnoNav.jsx';
import { FaPython, FaPhp, FaNode, FaReact, FaHtml5, FaCss3, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { SiPycharm,SiDjango } from 'react-icons/si';


const technologiesData = [
  { name: 'Python', logo: <FaPython />, level: 50, category: 'Back end' },
  { name: 'Django', logo: <SiDjango />, level: 40, category: 'Back end' },
  { name: 'PHP', logo: <FaPhp />, level: 40, category: 'Back end' },
  { name: 'Node.js', logo: <FaNode />, level: 40, category: 'Back end' },
  { name: 'JavaScript', logo: <IoLogoJavascript />, level: 75, category: 'Front end' },
  { name: 'React', logo: <FaReact />, level: 65, category: 'Front end' },
  { name: 'HTML', logo: <FaHtml5 />, level: 85, category: 'Front end' },
  { name: 'CSS', logo: <FaCss3 />, level: 70, category: 'Front end' },
  { name: 'MySQL', logo: <GrMysql />, level: 50, category: 'Base de données' },
  { name: 'Visual Studio Code', logo: <BiLogoVisualStudio />, level: 90, category: 'Outils' },
  { name: 'PyCharm', logo: <SiPycharm />, level: 75, category: 'Outils' },
  { name: 'GitHub', logo: <FaGithub />, level: 80, category: 'Outils' },
];

const renderTechnologyItem = (tech) => {
  return (
    <div key={tech.name} className="technology-item">
      {tech.logo}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${tech.level}%` }}></div>
      </div>
      <p>{tech.name}</p>
      <div className="percentage">{tech.level}%</div>
    </div>
  );
};

const Technologies = () => {
  const backendTech = technologiesData.filter((tech) => tech.category === 'Back end');
  const frontendTech = technologiesData.filter((tech) => tech.category === 'Front end');
  const databaseTech = technologiesData.filter((tech) => tech.category === 'Base de données');
  const toolsTech = technologiesData.filter((tech) => tech.category === 'Outils');

  return (
    <section id="technology">
      <h1>Techno</h1>
      <div className="technologie-me">
        <TechnoNav />
        <div className="technologies-list">
          <div className="column">
            <h2>Backend</h2>
            {backendTech.map((tech) => renderTechnologyItem(tech))}
          </div>
          <div className="column">
            <h2>Frontend</h2>
            {frontendTech.map((tech) => renderTechnologyItem(tech))}
          </div>
          <div className="column">
            <h2>Base de données</h2>
            {databaseTech.map((tech) => renderTechnologyItem(tech))}
          </div>
          <div className="column">
            <h2>Outils</h2>
            {toolsTech.map((tech) => renderTechnologyItem(tech))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
