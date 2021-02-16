import React from "react";
import CompraMexicano from "../images/CompraMexicano.png";

export default function Carrousel() {
  return (
    <section className="slide-gallery">
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ CompraMexicano } className="d-block w-100" alt="Compra mexicano" />
          <div className="carousel-caption d-none d-md-block">
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/Banner_Quienes somos.png" className="d-block w-100" alt="Quienes Somos" />
          <div className="carousel-caption d-none d-md-block">
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/Banner_Linea Xkal.png" className="d-block w-100" alt="Linea Xkal" />
          <div className="carousel-caption d-none d-md-block">
            
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
