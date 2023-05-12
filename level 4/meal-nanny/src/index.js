import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MealProvider} from "./MealContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MealProvider>
      <App /> 
    </MealProvider>
  </React.StrictMode>
);
