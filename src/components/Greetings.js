import React from "react";

export function Greetings(props) {
  return (
    <h1>
      Bienvenido, {props.nombre}, {props.apellido}
    </h1>
  );
}
