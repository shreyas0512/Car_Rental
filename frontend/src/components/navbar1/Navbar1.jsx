import React from "react";
import { Link } from "react-router-dom";
import "./navbar1.css";
function Navbar1() {
  return (
    <>
      <div className="box1">
        <div className="navbar1">
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

export default Navbar1;
