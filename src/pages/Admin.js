import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewProduct() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [materiales, setMateriales] = useState([]);
  const history = useHistory();

  function onChangeProducto(event) {
    setProducto(event.target.value);
  }

  function onChangePrecio(event) {
    setPrecio(event.target.value);
  }

  function onChangeDescripcion(event) {
    setDescripcion(event.target.value);
  }

  function onChangeMateriales(event) {
    setMateriales(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let article = {
      article: {
        nombre: producto,
        precio: precio,
        descripcion: descripcion,
        materiales: materiales
      }
    };

    const token = localStorage.getItem("token");

    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          alert("Ocurrió un error");
        } else {
          alert("Haz Hecho tu publicación con exito!");

          // Guardar el "token de la sesión" para usarlo posteriormente
          localStorage.setItem("token", data.user.token);

          history.push("/store");
        }
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-sm-8 col-md-6">
        <h1>Nuevo Producto</h1>
        <div className="form-group" onSubmit={onSubmitForm}>
          <label for="Producto"></label>

          <input
            type="text"
            className="form-control form-control-lg"
            id="nombre"
            name="nombre"
            aria-describedby="nombreHelp"
            placeholder="Nombre del PRodcuto"
            formControlName="nombreDelProducto"
            onChange={onChangeProducto}
          />
        </div>
        <div className="form-group">
          <label for="precio "></label>

          <input
            type="text"
            className="form-control form-control-lg"
            id="precio"
            name="precio"
            aria-describedby="precioHelp"
            placeholder="Precio"
            formControlName="precio"
            onChange={onChangePrecio}
          />
        </div>
        <div className="form-group">
          <label for="descripcion"></label>

          <textarea
            rows="5"
            className="form-control form-control-lg"
            id="descripcion"
            name="descripcion"
            aria-describedby="descripcionHelp"
            placeholder="Escribe la descripción del proyecto"
            formControlName="descripción"
            onChange={onChangeDescripcion}
          ></textarea>
        </div>
        <label for="Materiales"></label>

        <input
          type="text"
          className="form-control form-control-lg"
          id="Materiales"
          name="Materiales"
          aria-describedby="materialesHelp"
          placeholder="#Materiales"
          onChange={onChangeMateriales}
        />
        <div className="form-group d-flex justify-content-center">
           <button type="submit" className="btn mt-3 btn-lg" id="register-buttom">
             <h6>Publicar</h6>
           </button>
        </div>
      </div>
    </div>
  );
}
