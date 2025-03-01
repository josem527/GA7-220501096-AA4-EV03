import React from 'react';
// Importaciones de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Añadir el icono a la biblioteca
library.add(faFacebookF);
library.add(faYoutube);
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      
       
      position: 'relative',
      width: '100%'
    }}>
      <div className="footer-content">
        <div className="footer-section" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>CircuitFox</h3>
          <p>Visítanos en nuestras redes sociales</p>
        </div>
        <div className="footer-section" style={{ marginBottom: '20px' }}>
        <a href="https://facebook.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={socialIconStyle}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        <a href="https://youtube.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={socialIconStyle}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        <a href="https://youtube.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={socialIconStyle}>
            <FontAwesomeIcon icon={faTiktok} />
        </a>

        </div>
      </div>
      <div className="footer-bottom" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #555' }}>
        <p>© {new Date().getFullYear()} Copyright © 2020 CircuitFox. Todos los derechos reservados.</p>
      </div>
      {/* Logo centrado en el footer */}
      <div className="text-center" style={{ marginTop: '20px' }}>
        <img src="./image/SENA.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
    </footer>
  );
};

// // Estilo para los enlaces
// const linkStyle = {
//   color: '#4CAF50',
//   textDecoration: 'none',
//   fontFamily: "'Yesteryear', cursive"
// };
const socialIconStyle = {
    color: 'white',
    fontSize: '20px',
    margin: '0 10px',
    cursor: 'pointer'
  };

export default Footer;