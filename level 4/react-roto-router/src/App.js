import React from "react";
import Home from "./components/Home.js"
import About from "./components/About.js"
import Services from "./components/Services.js"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>

      <nav className="navBar">
        <h2>Plumbing Co.</h2>
        <Link className="link" to="/" style={{ padding: 5 }}>Home</Link>
        <Link className="link" to="/about" style={{ padding: 5 }}>About</Link>
        <Link className="link" to="/services" style={{ padding: 5 }}>Services</Link>
      </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
    </Router>
  );
}

export default App;