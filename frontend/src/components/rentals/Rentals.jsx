import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import "./rentals.css";
import Navbar1 from "../navbar1/Navbar1";
import searchLogo from "./searchLogo.png";
import Car from "../car/Car";

const style = {
  backgroundColor: "black",
  margin: "0px",

  color: "white",
};

function Rentals() {
  const handleClick = (e) => {
    console.log(e.target);
    console.log("img clicked");
  };
  return (
    <div className="rentalbody">
      <Navbar1 />
      <div className="rect">
        <h1>CHOOSE FROM A WIDE VARIETY OF CARS.</h1>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <img
            src={searchLogo}
            alt="searchlogo"
            id="searchlog"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="sf">
        <a href="" className="sort">
          SORT
        </a>
        <a href="" className="filter">
          FILTER
        </a>
      </div>
     <div className="cards">
      <Car name="Audi" />
      <Car name="bmw"/>
      <Car name="benz"/>
      <Car name="audi"/>
      <Car name="bmw"/>
      <Car name="benz"/>
      <Car name="audi"/>
      <Car name="bmw"/>
  
     </div>
    </div>
  );
}

export default Rentals;
