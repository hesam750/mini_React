import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/Navbar';
import ShipmentForm from './components/ShipmentForm';
import Tracking from './components/Tracking';
import ShipmentList from './components/ShipmentList';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<ShipmentForm />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/list" element={<ShipmentList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;