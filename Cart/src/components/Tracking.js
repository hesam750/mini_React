import React, { useState } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { useShipments } from '../context/ShipmentContext';

function Tracking() {
  const { getShipment } = useShipments();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    const foundShipment = getShipment(trackingNumber);
    if (foundShipment) {
      setShipment(foundShipment);
      setError('');
    } else {
      setError('بار با این شماره رهگیری یافت نشد');
      setShipment(null);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">رهگیری بار</h2>
      
      <Form onSubmit={handleTrack} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>شماره رهگیری</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="شماره رهگیری خود را وارد کنید"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
            />
            <Button variant="primary" type="submit" className="me-2">
              رهگیری
            </Button>
          </div>
        </Form.Group>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      {shipment && (
        <Card>
          <Card.Header>وضعیت بار</Card.Header>
          <Card.Body>
            <p><strong>شماره رهگیری:</strong> {shipment.trackingNumber}</p>
            <p><strong>وضعیت:</strong> {shipment.status}</p>
            <p><strong>مبدا:</strong> {shipment.origin}</p>
            <p><strong>مقصد:</strong> {shipment.destination}</p>
            <p><strong>تاریخ تحویل تخمینی:</strong> {shipment.estimatedDelivery}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Tracking;