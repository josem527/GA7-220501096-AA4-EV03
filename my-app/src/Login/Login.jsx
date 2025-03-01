import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para mostrar un mensaje de error en caso de credenciales incorrectas

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar las credenciales
    if (username === 'usuario1' && password === 'admin1234') {
      onLoginSuccess();  // Si las credenciales son correctas, iniciar sesión
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');  // Si son incorrectas, mostrar un mensaje de error
    }
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Iniciar sesión</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <input 
                    type="text" 
                    id="username" 
                    className="form-control" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="form-control" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
              </form>

              {/* Mostrar el mensaje de error si las credenciales son incorrectas */}
              {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
