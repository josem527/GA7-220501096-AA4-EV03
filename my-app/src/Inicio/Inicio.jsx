import React, { useEffect } from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";
import './estiloinicio.css';  // Asegúrate de tener este archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
const Inicio = () => {
  useEffect(() => {
    
    // Script para el slider
    const slider = document.querySelector(".slider-contenedor");
    const sliderIndividual = document.querySelectorAll(".contenido-slider");
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    const intervalo = 5000;

    window.addEventListener("resize", function () {
      width = sliderIndividual[0].clientWidth;
    });

    setInterval(() => {
      slides();
    }, intervalo);

    function slides() {
      slider.style.transform = `translate(${(-width * contador)}px)`;
      slider.style.transition = "transform .8s";
      contador++;

      if (contador === sliderIndividual.length) {
        setTimeout(() => {
          slider.style.transform = "translate(0px)";
          slider.style.transition = "transform 0s";
          contador = 1;
        }, 1500);
      }
    }
  }, []);

  return (
    
    <div id="index">
     
      {/* Jumbotron */}
      <div className="container">
        <div className="row">
          <div className="jumbotron" style={{ margin: '0 auto', marginTop: '5%', backgroundImage: 'url(image/elemen.png)' }}>
            <br /><br /><br />
            <h1 className="display-4"><b>¡Hola, bienvenido a CircuitFox!</b></h1>
            <p className="lead"><b>Aprende con la plataforma y usala desde tu dispositivo móvil o laptop</b></p>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=5SUvT9sjdUE" role="button">¡Conoce más!</a>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="slider1">
        <div className="slider-contenedor">
          {/* Slide 1 */}
          <div className="contenido-slider">
            <div>
              <h2><b>¡Desarrolla tus habilidades haciendo uso de la plataforma de CircuitFox desde tu laptop o smartphone!</b></h2>
              <a href="#">¡Aprende!</a>
            </div>
            <img src="./image/animacion.svg" alt="Slider 1" />
          </div>

          {/* Slide 2 */}
          <div className="contenido-slider">
            <div>
              <h2><b>Organiza tu tiempo para estudiar desde cualquier espacio de tu hogar o universidad.</b></h2>
              <a href="#">¡Proyectate!</a>
            </div>
            <img src="image/animacion2.svg" alt="Slider 2" />
          </div>

          {/* Slide 3 */}
          <div className="contenido-slider">
            <div>
              <h2><b>Experimenta mediante las herramientas de simulación que ofrece la plataforma y aprende de una manera práctica.</b></h2>
              <a href="#">¡Practica!</a>
            </div>
            <img src="image/animacion3.svg" alt="Slider 3" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="row" style={{ margin: '5% 17.5%' }}>
        {/* Card 1 */}
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem', margin: '0 auto' }} data-aos="zoom-in">
          <div className="card-body">
            <h5 className="card-title">¡Mide tus habilidades!</h5>
            <p className="card-text">La plataforma contiene un examen diagnóstico para medir tus conocimientos y un exámen final para medir lo aprendido.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem', margin: '0 auto' }} data-aos="zoom-in">
          <div className="card-body">
            <h5 className="card-title">¡Aprende conceptos!</h5>
            <p className="card-text">Los conceptos de los circuitos ayudan a comprender el comportamiento de éstos.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem', margin: '0 auto' }} data-aos="zoom-in">
          <div className="card-body">
            <h5 className="card-title">¡Experimenta con las herramientas!</h5>
            <p className="card-text">Tenemos tres herramientas que te servirán para analizar los circuitos de una forma más fácil.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card text-white bg-warning mb-3" style={{ maxWidth: '18rem', margin: '0 auto' }} data-aos="zoom-in">
          <div className="card-body">
            <h5 className="card-title">¡Simula los circuitos!</h5>
            <p className="card-text">Esta herramienta permite observar el comportamiento de los circuitos de una forma más práctica.</p>
          </div>
        </div>
      </div>

      

      {/* Scroll to Top Button */}
      {/* <button className="fas fa-chevron-up" style={{ fontSize: '40px', position: 'fixed', bottom: '10%', right: '10%' }} id="scrollUp"></button> */}
    </div>
  );
}

export default Inicio;
