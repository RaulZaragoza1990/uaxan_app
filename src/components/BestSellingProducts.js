import React from "react";
import { Link } from "react-router-dom";
import DownArrow from "./svgs/down_arrow.svg";
import SillaXkal from "../images/Silla Escandinava Cordon.png";
import sillaXkalEst from "../images/Silla Esterilla Escandinavo.png";
import EmojiClick from "./svgs/IconoClick_Mesa_de_trabajo_1.svg";

export default function BestSellingProducts() {
  return (
    <section class="popular-products" id="popular-products">
      <div class="row popular-products-title">
        <h1>Productos Populares</h1>
        <Link to="/BestSellingProducts" class="scrolly-popular-products">
          <img src={DownArrow} alt="Down Arrow" />
        </Link>
      </div>
      <div className="card-group">
        <div className="card">
          <img src={ SillaXkal } className="card-img-top" alt="..." />
          <div className="card-body" id= "cardBody">
            <h5 className="card-title">Sillon X'kal</h5>
            <p className="card-text">
              Hecho en madera de tzalam, con respaldo tejido en cordon nautico. 
              Ideal para espacios semi abiertos, como terrazas, valcones y palapas
            </p>
          </div>
          <div className="card-footer">
            <div className="row">
              <img src= {EmojiClick} id="emojiClick" alt="Da Click" />
              <h6>¡Compra en un click!</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sillaXkalEst} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">hola</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <img src={ EmojiClick } alt="Da Click" />
              <h6>¡Compra en un click!</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./images/Amazon Tunik.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">hola</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <img src="./svgs/Icono Click_Mesa de trabajo 1.svg" alt="Da Click" />
              <h6>¡Compra en un click!</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./images/Zapatera Kira.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">hola</p>
          </div>
          <div className="card-footer"> 
            <div className="row">
              <img src="./svgs/Icono Click_Mesa de trabajo 1.svg" alt="Da Click" />
              <h6>¡Compra en un click!</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-action">
        <Link to="/" target="_self" class="shop-action-button">
          <h6>Conoce nuestras lineas</h6>
        </Link>
      </div>
    </section>
  );
}