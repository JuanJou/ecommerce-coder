import React, { Component } from "react";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "Juan",
    };
  }

  cambiarNombre = () => {
    this.setState({ nombre: "Pedro" });
  };

  render() {
    return (
      <div>
        <button onClick={this.cambiarNombre}>Cambiar nombre</button>
        <span>{this.state.nombre}</span>
      </div>
    );
  }
}
