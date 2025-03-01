import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Navbar = ({ cambiarContenido, isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
          <img 
            src="/image/ZORRO.svg" 
            style={{ 
              height: '70px', 
              marginRight: '10px' 
            }} 
            alt="Logo"
          />
          CircuitFox
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {/* Mostrar botones dependiendo si el usuario está logueado */}
            {!isLoggedIn ? (
              <>
                <button className="btn btn-success me-2" onClick={() => cambiarContenido('inicio')}>Inicio</button>
                <button className="btn btn-success me-2" onClick={() => cambiarContenido('login')}>Iniciar sesión</button>
              </>
            ) : (
              <>
                <button className="btn btn-success me-2" onClick={() => cambiarContenido('temario')}>Temario</button>
                <button className="btn btn-success me-2" onClick={() => cambiarContenido('herramientas')}>Herramientas</button>
                <button className="btn btn-danger" onClick={onLogout}>Cerrar sesión</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
