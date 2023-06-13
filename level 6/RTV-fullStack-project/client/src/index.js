import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './style/style.css'
import UserProvider from './context/UserProvider';
// import CommentsProvider from './context/CommentsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
        <App/>
    </UserProvider>
    </Router>
  </React.StrictMode>
);