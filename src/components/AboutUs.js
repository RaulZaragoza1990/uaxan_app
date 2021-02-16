import React from "react";
import Tunnik from "../images/Tuunik_Crop.png";
import MesaXkal from "../images/Mesa Xkal_Crop.png";

export default function AboutUs() {
  return (
    <>
    <section className="historia" id="historia-nosotros">
        <div className="historia-img">
          <img src={ Tunnik } alt="" />
        </div>
        <div className="historia-text">
          <h1>UAXANTSÏKUA | [Ua-shan-s'i-cua]:.</h1>
          <p>
            Proviniente de la tranformación de la palabra purepecha, uaxantsïkua que 
            significa asiento, silla o banco, Uaxan es una marca de muebles 
            que invoca al sentirse comodo, a sentirse en casa. 
          </p>
          <p>
            Pasa, toma asiento.
          </p>
        </div> 
    </section>
    <section className="nosotros">
      <div className="nosotros-text" id="nosotros-text">
        <h1>De Playa para el mundo</h1>
        <p>
          Diseñamos, fabricamos y comercializamos nuestros 
          productos desde el 2019 en Playa del Carmen, Quintana Roo. El 
          estilo caribeño esta marcado en nuestra filosofía y 
          nuestro diseño. Y hoy vendemos a todas la república mexicana 
          con ganas de venderle a todo el globo terraquio.
        </p>
      </div>
      <div className="nosotros-img" id="nosotros-img">
        <img src={ MesaXkal } alt="" />
      </div>
    </section>
    </>
  );
}