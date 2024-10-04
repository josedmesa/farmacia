import React from 'react';
import './Ofertas.css';
import promocionImage from './promocion.jpg';

const Ofertas = () => {
  return (
    <div className="ofertas">
      <h2>Ofertas del Mes</h2>
      <p>Aprovecha nuestras ofertas especiales en productos seleccionados.</p>
      <img src={promocionImage} alt="Promocion" style={{ width: '15%', height: 'auto' }} />
    </div>
  );
};

export default Ofertas;
