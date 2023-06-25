import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./components/Home.js"
import HeadOut from "./components/HeadOut.js";
import StayIn from "./components/StayIn.js"
import {UserContext} from "./context/UserProvider"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/headOut" element={<HeadOut/>}/>
          <Route path="/stayIn" element={<StayIn/>}/>
        </Routes>
    </div>
  );
}

export default App;
