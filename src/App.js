import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CartIconBootstrap } from "./components/CartIconBootstrap";
import { Greetings } from "./components/Greetings";
import { Home } from "./components/ClassComponent";
import { HomeFunctional } from "./components/FunctionComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <span className="inner-text">Inicio</span>
        </Route>
        <Route path="/productos">
          <span className="inner-text">Productos</span>
        </Route>
        <Route path="/carrito">
          <span className="inner-text">Carrito</span>
        </Route>
      </Switch>
      <Greetings nombre="Juan" apellido="Jouglard"></Greetings>
      <Greetings nombre="Federico"> </Greetings>

      <Home></Home>
      <HomeFunctional
        cambiarNombre={() => console.log("Mi nombre es Juan")}
      ></HomeFunctional>
    </BrowserRouter>
  );
}

export default App;
