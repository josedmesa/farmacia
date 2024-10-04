import React, { useState } from 'react';
import './Comentarios.css';

const Comentarios = () => {
  const [comentario, setComentario] = useState('');
  const [listaComentarios, setListaComentarios] = useState([]);

  const agregarComentario = () => {
    setListaComentarios([...listaComentarios, comentario]);
    setComentario('');
  };

  return (
    <div className="comentarios">
      <h2>Añadir Comentarios</h2>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe tu comentario"
      ></textarea>
      <button onClick={agregarComentario}>Añadir Comentario</button>
      <ul>
        {listaComentarios.map((com, index) => (
          <li key={index}>{com}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
