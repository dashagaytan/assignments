import React from "react";
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
