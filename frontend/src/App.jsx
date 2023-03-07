import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Rentals from "./components/rentals/Rentals";
import Add from "./components/add/add";
import { db } from "./firebase";
import { storage } from "./firebase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
