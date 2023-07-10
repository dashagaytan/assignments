import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./components/Home.js"
import Auth from './components/Auth'
import HeadOut from "./components/HeadOut.js";
import StayIn from "./components/StayIn.js"
import Nav from "./components/Nav.js";
import ProtectedRoute from "./components/ProtectedRoute.js"
import { MuseContext } from "./context/MuseProvider.js";

function App() {
  const {token, logout} = useContext(MuseContext)

  return (
    <div className="App">
      {token && <Nav logout = {logout} token={token} />}

        <Routes>
          <Route 
          path="/" 
          element={token ? <Navigate to="/home"/> : <Auth/>}/>

        <Route 
          path="/headOut"
          element={<ProtectedRoute token={token} rederectTo = "/">
            <HeadOut />
          </ProtectedRoute>}
        />    

        <Route 
          path="/stayIn"
          element={<ProtectedRoute token={token} rederectTo = "/">
            <StayIn />
          </ProtectedRoute>}
        />
        <Route 
          path="/home"
          element={<ProtectedRoute token={token} rederectTo= "/">
            <Home />
          </ProtectedRoute>}
        />
        </Routes>
    </div>
  );
}

export default App;
