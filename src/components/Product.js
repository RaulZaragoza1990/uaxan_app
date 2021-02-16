import React from "react";
import ClickEmoji from "./svgs/IconoClick_Mesa_de_trabajo.svg"


export default function Product() {
  return (
    <div className="card">
        <img src="./images/Silla Escandinava Cordon.png" className="card-img-top" alt="..." />
        <div className="card-body" id= "cardBody">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">hola</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <img src={ ClickEmoji } alt="Da Click" />
            <h6>¡Agregar al Carrito!</h6>
          </div>
        </div>
    </div>

  );
}