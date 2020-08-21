import { CartIcon } from "./CartIcon";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/productos" activeClassName="activeLink">
            Productos
          </NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/carrito" activeClassName="activeLink">
            <CartIcon />
          </NavLink>
          <hr />
        </li>
      </ul>
    </nav>
  );
}
