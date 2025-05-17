import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { ShipmentProvider } from './context/ShipmentContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ShipmentProvider>
      <App />
    </ShipmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);