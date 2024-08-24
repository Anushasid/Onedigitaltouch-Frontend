import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Electricitybill.css';

const Electricitybill = () => {
  const [RRId, setRRId] = useState("");
  const [accountId, setAccountId] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the accountId to ensure it's being captured
    console.log(`Redirecting to /ElectricityInvoice with accountId=${accountId} and RRId=${RRId}`);

    // Redirect to the GetBills component with query parameters
    navigate(`/ElectricityInvoice?userId=${accountId}&RRId=${RRId}&serviceType=ELECTRICITY_BILL`);
  };

  return (
    <div className="electricity-bill-container">
      <h1 className="text-center mb-4">Electricity Bill</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="RRId" className="form-label">RR ID</label>
            <input
              type="text"
              className="form-control"
              id="RRId"
              placeholder="Enter your RR ID"
              value={RRId}
              onChange={(e) => setRRId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="accountId" className="form-label">Account ID</label>
            <input
              type="text"
              className="form-control"
              id="accountId"
              placeholder="Enter your Account ID"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Generate Bill</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/services" className="btn btn-primary">
            Go Back
          </a>
        </form>
      </div>
    </div>
  );
};

export default Electricitybill;
