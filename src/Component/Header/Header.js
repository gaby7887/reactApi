import React from 'react';
import './Header.css';

import imagen from '../../Imagenes/tiendanube.png';

const Header = () => {
  return <div className='Header'>
            <h1>Soña con mas...</h1>
            <img src={imagen} alt='Tienda nube logo' width={300} />
        </div>;
};

export default Header;
