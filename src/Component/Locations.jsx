import React, { useEffect, useState } from 'react';
import './Locations.css'; // Make sure this path is correct

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/locations/all')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        setFilteredLocations(data); // Initialize the filtered locations
      })
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  useEffect(() => {
    // Filter locations based on the search input (pincode)
    if (searchInput === '') {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter(location =>
        location.pincode.toString().startsWith(searchInput)
      );
      setFilteredLocations(filtered);
    }
  }, [searchInput, locations]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container my-5 container-box">
      <h1 className="text-center mb-4">Available Locations to Pay Bill</h1>
      
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-md-8">
          <p><strong>Center Working Time:</strong> 08:00 AM - 07:00 PM</p>
          <p><strong>Available Paymodes:</strong> Cash, Cheque, DD, Credit/Debit Card, Paytm, UPI.</p>
          <p><small>Paymodes may vary from Service to Service. Please contact the respective center for further details.</small></p>
        </div>
        <div className="col-md-4 text-end">
          <div className="input-group search-bar">
            <input 
              id="search-input" 
              type="search" 
              className="form-control" 
              placeholder="Enter your pincode..." 
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button id="search-button" type="button" className="btn btn-primary">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{location.name}</h5>
                  <p className="card-text"><strong>Address:</strong> {location.address}</p>
                  <p className="card-text"><strong>Phone Number:</strong> {location.phoneNumber}</p>
                  <p className="card-text"><strong>Pincode:</strong> {location.pincode}</p>
                  <p className="card-text"><strong>Map:</strong> <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapLink)}`} target="_blank" rel="noopener noreferrer">{location.mapLink}</a></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No places found for this pincode.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Locations;
