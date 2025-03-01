import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Inicio from './Inicio/Inicio';
import Temario from './Productos/Temario';
import Herramientas from './Herramientas/Herramientas';
import Login from './Login/Login';
import './App.css';

function App() {
  // Estado para controlar el contenido actual
  const [contenido, setContenido] = useState('inicio'); // valor inicial es 'inicio'
  // Estado para controlar si el usuario está logueado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Inicialmente el usuario no está logueado

  // Función para cambiar el contenido
  const cambiarContenido = (nuevoContenido) => {
    setContenido(nuevoContenido);
  };

  // Función para iniciar sesión
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Al loguearse exitosamente, el estado se actualiza
    setContenido('temario');  // Redirigimos al temario después de login
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false); // Reiniciamos el estado de login
    setContenido('inicio'); // Redirigimos al inicio
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100dvh'
    }}>
      <Navbar 
        cambiarContenido={cambiarContenido} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
      />

      <main style={{ padding: '20px' }}>
        {/* Si el usuario no está logueado, solo se muestra el Inicio o Login */}
        {!isLoggedIn ? (
          contenido === 'inicio' ? (
            <Inicio />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )
        ) : (
          // Si el usuario está logueado, mostrar Temario y Herramientas
          <>
            {contenido === 'temario' && <Temario />}
            {contenido === 'herramientas' && <Herramientas />}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
