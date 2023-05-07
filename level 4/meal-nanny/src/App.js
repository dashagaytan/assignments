import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import SavedMeals from "./components/SavedMeals"
import Recipe from "./components/Recipe";
import RandomMeal from "./components/RandomMeal"
import Footer from "./components/Footer";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/savedMeal" element={<SavedMeals />}/> 
          <Route path="/recipe" element={<Recipe />}/>
          <Route path="/randomMeal" element={<RandomMeal />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
