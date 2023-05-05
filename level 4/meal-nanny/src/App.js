import React from "react";
import Home from "./components/Home"
import SavedMeals from "./components/SavedMeals"
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Home />
        <SavedMeals />
        <Recipe />
      </nav>
      <Footer />
    </div>
  );
}

export default App;
