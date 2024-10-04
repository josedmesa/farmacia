import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Main from './componentes/Main';
import Calculadora from './componentes/Calculadora';
import Calificacion from './componentes/Calificacion';
import Comentarios from './componentes/Comentarios';
import ListaProductos from './componentes/ListaProductos';
import Ofertas from './componentes/Ofertas';
import Banner from './componentes/Banner';
import farmaciaImage from './componentes/farmacia.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <img src={farmaciaImage} alt="Farmacia" style={{ width: '15%', height: 'auto' }} />
      <Main />
      <ListaProductos />
      <Ofertas />
      <Calculadora />
      <Calificacion />
      <Comentarios />
      <Footer />
    </div>
  );
}

export default App;
