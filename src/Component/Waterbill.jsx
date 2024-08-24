import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Waterbill.css';

const Waterbill = () => {
  const [userId, setUserId] = useState("");
  const [meterId, setMeterId] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the meterId to ensure it's being captured
    console.log(`Redirecting to /WaterInvoice with userId=${userId} and meterId=${meterId}`);

    // Redirect to the WaterInvoice component with query parameters
    navigate(`/WaterInvoice?userId=${userId}&meterId=${meterId}&serviceType=WATER_BILL`);
  };

  return (
    <div className="water-bill-container">
      <h1 className="text-center mb-4">Water Bill</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">Customer ID</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="meterId" className="form-label">Meter ID</label>
            <input
              type="text"
              className="form-control"
              id="meterId"
              placeholder="Enter your Meter ID"
              value={meterId}
              onChange={(e) => setMeterId(e.target.value)}
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

export default Waterbill;
