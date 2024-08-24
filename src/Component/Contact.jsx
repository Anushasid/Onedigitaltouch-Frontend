import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <section className="container my-5">
      <div className="contact-section">
        <h1 className="text-center mb-4">Contact Us</h1>

        <div className="row">
          {/* Hubli Electricity Office */}
          <div className="col-md-6 mb-4">
            <h2 className="text-uppercase">Hubli Electricity Office</h2>
            <p><strong>Address:</strong></p>
            <p>Electricity Department,</p>
            <p>Hubli, Karnataka, 580020</p>
            <p><strong>Phone:</strong> 0836-2213888 / 0836-2213869</p>
            <p><strong>Email:</strong> <a href="mailto:hubli.electricity@example.com">hubli.electricity@example.com</a></p>
          </div>

          {/* Hubli Water Office */}
          <div className="col-md-6 mb-4">
            <h2 className="text-uppercase">Hubli Water Office</h2>
            <p><strong>Address:</strong></p>
            <p>Water Supply Department,</p>
            <p>Hubli, Karnataka, 580021</p>
            <p><strong>Phone:</strong> 0836-2233840 / 0836-2233850</p>
            <p><strong>Email:</strong> <a href="mailto:hubli.water@example.com">hubli.water@example.com</a></p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>For any other inquiries or issues, please contact us through the respective departments. Our team will be happy to assist you.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
