import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Store from "./pages/Store";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contacto";

import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contacto" component={Contacto} />
        </div>
      </BrowserRouter>
    </>
  );
}
