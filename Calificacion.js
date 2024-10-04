import React, { useState } from 'react';
import './Calificacion.css';

const Calificacion = () => {
  const [calificacion, setCalificacion] = useState(1);

  return (
    <div className="calificacion">
      <h2>Calificar Producto</h2>
      <select value={calificacion} onChange={(e) => setCalificacion(e.target.value)}>
        <option value="1">1 estrella</option>
        <option value="2">2 estrellas</option>
        <option value="3">3 estrellas</option>
        <option value="4">4 estrellas</option>
        <option value="5">5 estrellas</option>
      </select>
      <p>Producto calificado con {calificacion} estrellas.</p>
    </div>
  );
};

export default Calificacion;
