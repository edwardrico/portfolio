import React from 'react';
import CV from "../../assets/cv-edwardAlmedo.pdf";


const Button = () => {
    return (
        

        <div className='button'>
            <a href={CV} download className='btn'>Téléchargez mon CV</a>
            <a href='#contact' className='btn btn-primary'>Contactez moi</a>
               
        </div>
    );
};

export default Button;
    
