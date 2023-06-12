import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './style/style.css'
import UserProvider from './context/UserProvider';
import CommentsProvider from './context/CommentsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CommentsProvider>
        <App/>
      </CommentsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);