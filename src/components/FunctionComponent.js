import React, { useState } from "react";

export function HomeFunctional(props) {
  return (
    <div>
      <button onClick={props.cambiarNombre}>Cambiar nombre</button>
      <span>Juan</span>
    </div>
  );
}
