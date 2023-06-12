import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js';
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider'

export default function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/'
        element={<Auth/>}
        /> 

        <Route 
          path="/profile"
          element={<Profile />}
        />

        <Route 
          path="/public"
          element={<Public />}
        />

      </Routes>

    </div>
  );
}