import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./navbar.css";
function Navbar(props, prop2) {
  return (
    <>
      <div className="box" style={props.style}>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/rentals">RENTALS</Link>
            </li>
            <li>
              <Link to="/add">ADD</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
