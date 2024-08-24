import React from 'react';
import './Services.css'; // Ensure this is the correct path to your CSS file

const Services = () => {
  return (
    <div className="container my-5">
      <div className="services-box">
        <h1 className="text-center mb-4">Services Offered</h1>
        <div className="row">
          {/* First Card */}
          <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card">
              <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img
                  src="ele4.jpg"
                  className="img-fluid"
                  alt="Electricity Bill"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Electricity Bill</h5>
                <p className="card-text">
                  Manage and pay your electricity bills quickly and easily.
                </p>
                <a href="/electricitybill" className="btn btn-primary" data-mdb-ripple-init>
                  View Bill
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="card">
              <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img
                  src="water1.jpg"
                  className="img-fluid"
                  alt="Water Bill"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Water Bill</h5>
                <p className="card-text">
                  Manage and pay your water bills quickly and easily.
                </p>
                <a href="/waterbill" className="btn btn-primary" data-mdb-ripple-init>
                  View Bill
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
