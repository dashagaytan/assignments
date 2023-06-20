import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js';
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js';
import { UserContext } from './context/UserProvider'

export default function App(props) {
  const {token, logout} = useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logout={logout} token={token}/>}
      <Routes>
        <Route path='/'
        element= {token ? <Navigate to="/profile"/> : <Auth />}
        /> 

        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} rederectTo = "/">
            <Profile />
          </ProtectedRoute>}
        />

        <Route 
          path="/public"
          element={<ProtectedRoute token={token} rederectTo = "/">
            <Public />
          </ProtectedRoute>}
        />

      </Routes>

    </div>
  );
}