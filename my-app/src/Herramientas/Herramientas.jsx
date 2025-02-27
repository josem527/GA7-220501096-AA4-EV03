import React from 'react';

const Herramientas = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          <div className="contenidoss" style={{ margin: '0 auto', marginTop: '6%' }}>
            <br/><br/><br/>
            <div className="row" style={{ marginBottom: '' }} >
              {/* Card 1 */}
              <div className="text-center card border-primary col-sm-12 col-lg-3" data-aos="zoom-in" style={{ maxWidth: '18rem', margin: '10px auto',display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                <br/>
                <img src="image/ohm.gif" className="card-img-top" alt="..." style={{ width: '80%', margin: 'auto' }} />
                <div className="card-body text-dark">
                  <h5 className="card-title">Calculadora de Ohm</h5>
                  <p className="card-text">Calcula el voltaje, la corriente y la resistencia.</p>
                  <a href="calculadoraohm.html" className="btn btn-primary" style={{ marginTop: '10%' }}>¡Vamos!</a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="text-center card border-warning col-lg-3" data-aos="zoom-in" style={{ maxWidth: '18rem', margin: '10px auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                <br/>
                <img src="image/algebra.svg" className="card-img-top" alt="..." style={{ width: '75%', margin: 'auto' }} />
                <div className="card-body text-dark">
                  <h5 className="card-title">Calculadora de ecuaciones simultáneas</h5>
                  <p className="card-text">Ecuaciones 2x2 y 3x3</p>
                  <a href="matrices.html" className="btn btn-primary">¡Vamos!</a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="text-center card border-success col-lg-3" data-aos="zoom-in" style={{ maxWidth: '18rem', margin: '10px auto',display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                <br/>
                <img src="image/simuicon2.png" className="card-img-top" alt="..." style={{ width: '90%' }} />
                <div className="card-body text-dark">
                  <h5 className="card-title">Simulador de circuitos</h5>
                  <p className="card-text">Simula los ejercicios que realices dentro de CircuitFox.</p>
                  <a href="Simulador.html" className="btn btn-primary" style={{ marginTop: '5%' }}>¡Vamos!</a>
                </div>
              </div>
              {/* Card 4 */}
              <div className="text-center card border-success col-lg-3" data-aos="zoom-in" style={{ maxWidth: '18rem', margin: '10px auto' }}>
                <br/>
                <img src="image/simuicon3.png" className="card-img-top" alt="..." style={{ width: '75%',display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <div className="card-body text-dark">
                  <h5 className="card-title">Simulador de Consola</h5>
                  <p className="card-text">Codifica y practica haciendo uso de varios lenguajes de programación.</p>
                  <a href="Simulador.html" className="btn btn-primary" style={{ marginTop: '5%' }}>¡Vamos!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      

    
    </div>
  );
}

export default Herramientas;
