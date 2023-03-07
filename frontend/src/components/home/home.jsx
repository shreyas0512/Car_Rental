import React from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="heading1">
          <h1>RENT-A-CAR</h1>
          <h1>TODAY.</h1>
          <p>
            check our wide range of cars out and be a part of a larger
            community.Earn more from giving your car for rent.
          </p>
          <a className="button" href="">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
