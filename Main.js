import React from 'react';
import './Main.css';
import producto1Image from './producto1.jpg';
import producto2Image from './producto2.jpg';
import producto3Image from './producto3.jpg';

function Main() {
  return (
    <main className="App-main">
      <h2>Productos de belleza</h2>
      <p></p>
      <img src={producto1Image} alt="Promocion" style={{ width: '15%', height: 'auto' }} />
      <img src={producto2Image} alt="Promocion" style={{ width: '15%', height: 'auto' , marginRight: '200px', marginLeft: '200px'}} />
      <img src={producto3Image} alt="Promocion" style={{ width: '15%', height: 'auto' }} />
    </main>
  );
}

export default Main;
