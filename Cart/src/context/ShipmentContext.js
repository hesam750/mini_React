import React, { createContext, useState, useContext } from 'react';

const ShipmentContext = createContext();

export function useShipments() {
  return useContext(ShipmentContext);
}

export function ShipmentProvider({ children }) {
  const [shipments, setShipments] = useState([]);

  const addShipment = (shipment) => {
  const trackingNumber = 'BR' + Date.now().toString().slice(-8);
  const newShipment = { 
    ...shipment,
    trackingNumber,
    status: 'ثبت اولیه',
    price: shipment.price || 0 
  };
  setShipments(prev => [...prev, newShipment]);
  return trackingNumber;
};

  const getShipment = (trackingNumber) => {
    return shipments.find(ship => ship.trackingNumber === trackingNumber);
  };

   const calculateTotalPrice = () => {
  return shipments.reduce((total, shipment) => {
    return total + (Number(shipment.price) || 0);
  }, 0);
};

  const updateShipmentStatus = (trackingNumber, newStatus) => {
    setShipments(prev => prev.map(ship => 
      ship.trackingNumber === trackingNumber 
        ? { ...ship, status: newStatus } 
        : ship
    ));
  };
const removeShipment = (trackingNumber) => {
  setShipments(prev => prev.filter(
    ship => ship.trackingNumber !== trackingNumber
  ));
};

  const value = {
    shipments,
    addShipment,
    getShipment,
    updateShipmentStatus,
    removeShipment,
    calculateTotalPrice
  };

  return (
    <ShipmentContext.Provider value={value}>
      {children}
    </ShipmentContext.Provider>
  );
  
}