import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
      name,
      email,
      phoneNumber,
      area,
      city,
      pincode,
    };
  
    try {
      const response = await fetch('http://localhost:8081/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }
  
      if (response.ok) {
        setResponseMessage("Registration successful");
      } else {
        setResponseMessage(data.message || "Error in registration");
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error occurred while creating user');
    }
  };
  

  return (
    <>
      
      <section className="container-fluid ">
            <div className="row justify-content-center  "style={{ borderRadius: 25 }}>
            <div className="col-lg-12 col-xl-11">
              <div className="row justify-content-center" >
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              placeholder="Enter Your Name "
                              onChange={(e) => setName(e.target.value)}
                              required
                            />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              placeholder="Enter Your Email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3d"
                              className="form-control"
                              value={phoneNumber}
                              placeholder="Enter Your Phone Number"
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-home fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                              value={area}
                              placeholder="Enter Your Area"
                              onChange={(e) => setArea(e.target.value)}
                              required
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-city fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              value={city}
                              placeholder="Enter Your City"
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-map-pin fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4ce"
                              className="form-control"
                              value={pincode}
                              placeholder="Enter Your Pincode"
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">Already Exist? <a href="/signin" className="link-danger">Login</a></p>
                        </div>
                        {responseMessage && <p className="text-center mt-3">{responseMessage}</p>}
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
        </div>
      </section>
    </>
  );
};

export default Signup;
