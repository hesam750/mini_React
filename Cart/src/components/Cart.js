import React, { useContext } from 'react';
import { Container, Table, Button, Badge, Alert } from 'react-bootstrap';
import { useShipments } from '../context/ShipmentContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { shipments, updateShipmentStatus,calculateTotalPrice } = useShipments();

    const getStatusVariant = (status) => {
        switch (status) {
            case 'ثبت اولیه': return 'secondary';
            case 'در حال حمل': return 'primary';
            case 'تحویل شده': return 'success';
            default: return 'light';
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">سبد خرید بارها</h2>

            {shipments.length === 0 ? (
                <Alert variant="info">
                    سبد خرید شما خالی است. <Link to="/">برای ثبت بار جدید کلیک کنید</Link>
                </Alert>
            ) : (
                <>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>شماره رهگیری</th>
                                <th>نوع کالا</th>
                                <th>وزن (kg)</th>
                                <th>قیمت (تومان)</th>
                                <th>وضعیت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipments.map((shipment, index) => (
                                <tr key={shipment.trackingNumber}>
                                    <td>{index + 1}</td>
                                    <td>{shipment.trackingNumber}</td>
                                    <td>{shipment.goodsType}</td>
                                    <td>{shipment.weight}</td>
                                    <td>{shipment.price}</td>
                                    <td>
                                        <Badge bg={getStatusVariant(shipment.status)}>
                                            {shipment.status}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => updateShipmentStatus(shipment.trackingNumber, 'حذف شده')}
                                        >
                                            حذف
                                        </Button>
                                    </td>
                                    {/* <td>{Number(shipment.price).toLocaleString('fa-IR')}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="text-end mt-3">
                        <h4>جمع کل: {calculateTotalPrice().toLocaleString('fa-IR')} تومان</h4>
                    </div>
                </>
            )}
        </Container>
    );
}

export default Cart;