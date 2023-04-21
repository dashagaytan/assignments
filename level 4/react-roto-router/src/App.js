import React from "react";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" >Home</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
