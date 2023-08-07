import React from 'react';
import CV from "../../assets/Cv_Edward_Almedo.pdf";


const Button = () => {
    return (
        

        <div className='button'>
            <a href={CV} download className='btn'>Telechager CV</a>
            <a href='#contact' className='btn btn-primary'>Contactez moi</a>
               
        </div>
    );
};

export default Button;
    
