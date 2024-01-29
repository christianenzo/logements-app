import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppartProvider from './context/AppartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppartProvider>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </AppartProvider>
);
