import React from 'react';
import './Header.css';

import imagen from '../../Imagenes/NASA_logo.png';

const Header = () => {
  return <div className='Header'>
            <h1>Nasa App</h1>
            <img src={imagen} alt='NASA logo' width={150} />
        </div>;
};

export default Header;
