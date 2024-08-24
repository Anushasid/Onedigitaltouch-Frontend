import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './Waterinvoice.css'; // Ensure this file exists and is properly styled

const WaterInvoice = () => {
    const [bill, setBill] = useState(null);
    const [responseMessage, setResponseMessage] = useState("");

    const query = new URLSearchParams(useLocation().search);
    const userId = query.get('userId');
    const meterId = query.get('meterId');
    const serviceType = query.get('serviceType') || 'WATER_BILL'; // Default service type
    const navigate = useNavigate();

    useEffect(() => {
        if (userId && serviceType) {
            console.log(`Fetching bill for userId=${userId}, meterId=${meterId}, and serviceType=${serviceType}`);

            const fetchBill = async () => {
                try {
                    const response = await fetch(`http://localhost:8081/api/v1/bill/${userId}/service-Type/${serviceType}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();
                    console.log("Bill fetched:", data);

                    setBill(data);
                    setResponseMessage("");
                } catch (error) {
                    console.error('Error:', error);
                    setResponseMessage('Error occurred while fetching bill');
                }
            };

            fetchBill();
        } else {
            console.log("userId or serviceType is missing");
        }
    }, [userId, serviceType]);

    const handlePay = () => {
        alert("Redirecting to payment page...");
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="invoice-card shadow-lg p-4">
                        <header className="text-center mb-4">
                            <img src="logo.webp" alt="Government Logo" className="img-fluid" style={{ maxHeight: '100px' }} />
                            <h1>Hubli Water Bill</h1>
                            <p>Phone: [Phone Number] | Email: [Email] | Website: [Website]</p>
                        </header>

                        {responseMessage && <p className="text-center text-danger">{responseMessage}</p>}

                        {bill ? (
                            <>
                                <div className="details-container mb-4">
                                    <div className="details-section">
                                        <h4>Bill Details</h4>
                                        <div className="details-item"><strong>Bill ID:</strong> {bill.id}</div>
                                        <div className="details-item"><strong>Meter ID:</strong> {meterId}</div>
                                        <div className="details-item"><strong>Service Type:</strong> {bill.serviceType}</div>
                                        <div className="details-item"><strong>Status:</strong> {bill.status}</div>
                                        <div className="details-item"><strong>Issued Date:</strong> {new Date(bill.issuedDate).toLocaleDateString()}</div>
                                        <div className="details-item"><strong>Due Date:</strong> {new Date(bill.dueDate).toLocaleDateString()}</div>
                                        <div className="details-item"><strong>Total Amount:</strong> ₹{bill.amountDue.toFixed(2)}</div>
                                    </div>
                                    
                                    <div className="details-section">
                                        <h4>User Details</h4>
                                        <div className="details-item"><strong>Name:</strong> {bill.user.name}</div>
                                        <div className="details-item"><strong>Email:</strong> {bill.user.email}</div>
                                        <div className="details-item"><strong>Phone:</strong> {bill.user.phoneNumber}</div>
                                        <div className="details-item"><strong>Area:</strong> {bill.user.area}</div>
                                        <div className="details-item"><strong>City:</strong> {bill.user.city}</div>
                                        <div className="details-item"><strong>Pincode:</strong> {bill.user.pincode}</div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-12">
                                        <h4>Payment Details</h4>
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Add detailed billing items here */}
                                                <tr>
                                                    <td>Water Consumption</td>
                                                    <td>500 liters</td>
                                                    <td>₹0.05/liter</td>
                                                    <td>₹25.00</td>
                                                </tr>
                                                {/* Add more items as needed */}
                                                <tr>
                                                    <td colSpan="3" className="text-end"><strong>Subtotal:</strong></td>
                                                    <td>₹25.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3" className="text-end"><strong>Taxes:</strong></td>
                                                    <td>₹25.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3" className="text-end"><strong>Amount Paid:</strong></td>
                                                    <td>₹0.00</td> {/* Placeholder for paid amount if applicable */}
                                                </tr>
                                                <tr>
                                                    <td colSpan="3" className="text-end"><strong>Amount Due:</strong></td>
                                                    <td>₹{bill.amountDue.toFixed(2)}</td> {/* Same as Total Amount Due if not paid */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="text-center mt-4">
                                    <button type="button" className="btn btn-primary me-2" onClick={handlePay}>Pay Now</button>
                                    <button type="button" className="btn btn-secondary" onClick={handleGoBack}>Go Back</button>
                                </div>
                            </>
                        ) : (
                            <p className="text-center">
                                No bill found or an error occurred. Please re-check your details.
                                &nbsp;&nbsp;
                                <a href="/services" className="btn btn-primary">Go Back</a>
                            </p>
                        )}

                        <footer className="mt-4 text-center">
                            <p>Payment is due within 30 days. Please contact us if you have any questions.</p>
                            <p>© 2024 Government of [State/Region]. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterInvoice;
