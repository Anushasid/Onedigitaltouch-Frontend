import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom styles

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">OneBilling</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" to="/Aboutonebilling">About OneBilling</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Abouthubli">About Hubli</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/silentfeatures">Silent Features</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Signin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Desk-Map</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/globalnotifications">All Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userprofile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
