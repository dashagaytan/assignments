import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MuseProvider} from './MuseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MuseProvider>
        <App /> 
    </MuseProvider>
);