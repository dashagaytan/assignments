import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './style/style.css'
import UserProvider from './context/UserProvider';
import IssueProvider from './context/IssueProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <IssueProvider>
      <UserProvider>
          <App/>
      </UserProvider>
      </IssueProvider>
    </Router>
  </React.StrictMode>
);