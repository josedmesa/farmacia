import React from 'react';
import './ListaProductos.css';
import pedialyteImage from './pedialyte.png';
import dolexImage from './dolex.jpg';
import apronaxImage from './apronax.jpg';

const productos = [
  { 
    id: 1, 
    nombre: 'Pedialyte Max Con Zinc Coco Suero Deshidratacion Abbott Frasco X 500 Ml', 
    precio: ' $9.750', 
    imagen: pedialyteImage
  },
  { 
    id: 2, 
    nombre: 'Dolex Gripa X 12 Tabletas ', 
    precio: '$16.500', 
    imagen: dolexImage 
  },
  { 
    id: 3, 
    nombre: 'Apronax Naproxeno Sodico 275 Mg Caja X 8 Tabletas ', 
    precio: '$14.000', 
    imagen: apronaxImage 
  },
];

const ListaProductos = () => {
  return (
    <div className="lista-productos">
      <h2>Productos Destacados</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            {producto.nombre} - {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;

