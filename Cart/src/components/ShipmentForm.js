import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useShipments } from '../context/ShipmentContext';

function ShipmentForm() {
    const { addShipment } = useShipments();
    const [formData, setFormData] = useState({
        goodsType: '',
        weight: '',
        volume: '',
        quantity: '',
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        receiverName: '',
        receiverPhone: '',
        receiverAddress: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trackingNum = addShipment(formData);
        setTrackingNumber(trackingNum);
        setShowSuccess(true);
        setFormData({
            goodsType: '',
            weight: '',
            volume: '',
            quantity: '',
            senderName: '',
            senderPhone: '',
            senderAddress: '',
            receiverName: '',
            receiverPhone: '',
            receiverAddress: '',
            price: 0
        });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">ثبت خرید بار جدید</h2>
            {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    <p>بار با موفقیت ثبت شد!</p>
                    <p>شماره رهگیری: <strong>{trackingNumber}</strong></p>
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <h4 className="mt-4">اطلاعات کالا</h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>نوع کالا</Form.Label>
                            <Form.Control
                                type="text"
                                name="goodsType"
                                value={formData.goodsType}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>وزن (کیلوگرم)</Form.Label>
                            <Form.Control
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>حجم (متر مکعب)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                name="volume"
                                value={formData.volume}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <h4 className="mt-4">اطلاعات فرستنده</h4>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>نام فرستنده</Form.Label>
                            <Form.Control
                                type="text"
                                name="senderName"
                                value={formData.senderName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>تلفن فرستنده</Form.Label>
                            <Form.Control
                                type="tel"
                                name="senderPhone"
                                value={formData.senderPhone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>آدرس فرستنده</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="senderAddress"
                                value={formData.senderAddress}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <h4 className="mt-4">اطلاعات گیرنده</h4>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>نام گیرنده</Form.Label>
                            <Form.Control
                                type="text"
                                name="receiverName"
                                value={formData.receiverName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>تلفن گیرنده</Form.Label>
                            <Form.Control
                                type="tel"
                                name="receiverPhone"
                                value={formData.receiverPhone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>آدرس گیرنده</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="receiverAddress"
                                value={formData.receiverAddress}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>قیمت کالا (تومان)</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" type="submit" size="lg">
                        ثبت بار
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default ShipmentForm;