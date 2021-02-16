import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let user = {
      user: {
        email: email,
        password: password
      }
    };

    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          alert("Ocurrió un error");
        } else {
          alert("Bienvenido!");

          localStorage.setItem("token", data.user.token);
          localStorage.setItem("userName", data.user.username);

          history.push("/feed");
        }
      });
  }

  return (
    <div className="row justify-content-center">
      <form className="col-sm-8 mt-4" onSubmit={onSubmitForm}>
        <h1 className="text-center">Sign in</h1>
        <p className="text-center">
          <Link className="need-account" to="/signup">
            ¿Necesitas una Cuenta?
          </Link>
        </p>

        <div className="form-group">
          <label for="inputEmail"></label>

          <input
            type="email"
            className="form-control form-control-lg"
            id="inputEmail"
            name="email"
            formControlName="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={onChangeEmail}
          />
        </div>
        <div className="form-group">
          <label for="inputPassword"></label>

          <input
            type="password"
            className="form-control form-control-lg"
            id="inputPassword"
            name="password"
            formControlName="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </div>
        <div className="form-group d-flex justify-content-center">
           <button type="submit" className="btn mt-3 btn-lg" id="register-buttom">
             <h6>Inicia Sesión</h6>
           </button>
        </div>
      </form>
    </div>
  );
}
