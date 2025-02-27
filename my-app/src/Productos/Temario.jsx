import React from 'react';
import './Temario.css'; // Asegúrate de importar el archivo CSS

const Temario = () => (
  
  <div className="productos-container">
    
    <div className="product-cards">
      <div className="product-card">
        <img src="image/resistor.svg" alt="Conceptos básicos" className="product-img" />
        <div className="card-body">
          <h5 className="card-title">Conceptos básicos</h5>
          <p className="card-text">
          Este tema aborda los principios fundamentales de los circuitos eléctricos, explicando los tres conceptos clave: corriente, voltaje y resistencia, los cuales son esenciales para entender cómo fluye la electricidad a través de un circuito.
          </p>
          <a href="circuitoelectrico.html" className="btn">¡Vamos!</a>
        </div>
      </div>

      <div className="product-card">
        <img src="image/iconcir.JPG" alt="Leyes básicas" className="product-img" />
        <div className="card-body">
          <h5 className="card-title">Leyes básicas</h5>
          <p className="card-text">
            Para determinar el valor del voltaje, resistencia y corriente, se requiere conocer algunas leyes fundamentales de los circuitos eléctricos.
          </p>
          <a href="leydeohm.html" className="btn">¡Vamos!</a>
        </div>
      </div>

      <div className="product-card">
        <img src="image/electrical-circuit.png" alt="Métodos de análisis" className="product-img" />
        <div className="card-body">
          <h5 className="card-title">Métodos de análisis</h5>
          <p className="card-text">
            Se puede analizar por medio de ecuaciones simultáneas los parámetros básicos de un circuito eléctrico.
          </p>
          <a href="nodos.html" className="btn">¡Vamos!</a>
        </div>
      </div>

      <div className="product-card">
        <img src="image/circuitcon.png" alt="Teoremas de circuitos" className="product-img" />
        <div className="card-body">
          <h5 className="card-title">Teoremas de circuitos</h5>
          <p className="card-text">
            El teorema de Thevenin y Norton permitirán tener un análisis simplificado en los circuitos eléctricos.
          </p>
          <a href="thevenin.html" className="btn">¡Vamos!</a>
        </div>
      </div>
      <div className="product-card">
        <img src="image/algorithm.png" alt="Teoremas de circuitos" className="product-img" />
        <div className="card-body">
          <h5 className="card-title">Programación básica</h5>
          <p className="card-text">
          La programación básica es el punto de partida para entender cómo interactuar con las computadoras. A través de conceptos simples como variables, ciclos y funciones, se aprende a resolver problemas y crear aplicaciones de manera eficiente.
          </p>
          <a href="thevenin.html" className="btn">¡Vamos!</a>
        </div>
      </div>
    </div>

    
  </div>
);


export default Temario;
