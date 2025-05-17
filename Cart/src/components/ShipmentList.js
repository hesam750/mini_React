import React from 'react';
import { Table, Container, Button, Badge, Alert } from 'react-bootstrap';
import { useShipments } from '../context/ShipmentContext';

function ShipmentList() {
    const {
        shipments,
        updateShipmentStatus,
        removeShipment,
        calculateTotalPrice
    } = useShipments();

    const getStatusVariant = (status) => {
        switch (status) {
            case 'ثبت اولیه': return 'secondary';
            case 'در حال حمل': return 'primary';
            case 'تحویل شده': return 'success';
            case 'حذف شده': return 'danger';
            default: return 'light';
        }
    };

    const handleStatusUpdate = (trackingNumber, newStatus) => {
        updateShipmentStatus(trackingNumber, newStatus);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">لیست بارها</h2>

            {shipments.length === 0 ? (
                <Alert variant="info">
                    هیچ بار ثبت شده‌ای وجود ندارد
                </Alert>
            ) : (
                <>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>شماره رهگیری</th>
                                <th>نوع کالا</th>
                                <th>فرستنده</th>
                                <th>گیرنده</th>
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
                                    <td>{shipment.senderName}</td>
                                    <td>{shipment.receiverName}</td>
                                    <td>{Number(shipment.price).toLocaleString('fa-IR')}</td>
                                    <td>
                                        <Badge bg={getStatusVariant(shipment.status)}>
                                            {shipment.status}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="outline-primary"
                                            onClick={() => handleStatusUpdate(shipment.trackingNumber, 'در حال حمل')}
                                            disabled={shipment.status !== 'ثبت اولیه'}
                                            className="me-2"
                                        >
                                            شروع حمل
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline-success"
                                            onClick={() => handleStatusUpdate(shipment.trackingNumber, 'تحویل شده')}
                                            disabled={shipment.status !== 'در حال حمل'}
                                            className="me-2"
                                        >
                                            تحویل شد
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => removeShipment(shipment.trackingNumber)}
                                        >
                                            حذف
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="text-end mt-4 p-3 bg-light rounded">
                        <h4>
                            جمع کل: {calculateTotalPrice().toLocaleString('fa-IR')} تومان
                        </h4>
                    </div>
                </>
            )}
        </Container>
    );
}

export default ShipmentList;