import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home.js"
import HeadOut from "./components/HeadOut.js";
import StayIn from "./components/StayIn.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/headOut" element={<HeadOut/>}/>
          <Route path="/stayIn" element={<StayIn/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
