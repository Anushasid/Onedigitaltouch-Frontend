import React, { useState, useEffect } from 'react';
import './Notifications.css';

const GlobalNotifications = () => {
  const [globalnotifications, setGlobalnotifications] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch('http://localhost:8081/api/v1/globalnotification/all')
      .then(response => response.json())
      .then(data => setGlobalnotifications(data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return (
    <div className="notifications-container">
      <h2>All Notifications</h2>
      {globalnotifications.length > 0 ? (
        globalnotifications.map((globalnotification, index) => (
          <div key={index} className="notification-item">
            <h4>{globalnotification.title}</h4>
            <p>{globalnotification.message}</p>
            <span>{new Date(globalnotification.date).toLocaleString()}</span>
          </div>
        ))
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
}

export default GlobalNotifications;
