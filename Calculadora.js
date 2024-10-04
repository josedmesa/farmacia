import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [peso, setPeso] = useState('');
  const [dosis, setDosis] = useState(null);

  const calcularDosis = () => {
    const resultado = peso * 0.5;
    setDosis(resultado);
  };

  return (
    <div className="calculadora">
      <h2>Calculadora de Dosis</h2>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso en kg"
      />
      <button onClick={calcularDosis}>Calcular Dosis</button>
      {dosis && <p>La dosis recomendada es: {dosis} mg.</p>}
    </div>
  );
};

export default Calculadora;
