import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Inicio from './Inicio/Inicio';
import Herramientas from './Herramientas/Herramientas';
import Temario from './Productos/Temario';
import './App.css'; 

function App() {
  // Estado para controlar el contenido actual
  const [contenido, setContenido] = useState('inicio'); // valor inicial es 'inicio'

  // Función para cambiar el contenido
  const cambiarContenido = (nuevoContenido) => {
    setContenido(nuevoContenido);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100dvh'
    }}>
      <Navbar cambiarContenido={cambiarContenido} />
      
      <main style={{ padding: '20px' }}>
        {contenido === 'inicio' && <Inicio />}
        {contenido === 'productos' && <Temario />}
        {contenido === 'contacto' && <Herramientas />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
