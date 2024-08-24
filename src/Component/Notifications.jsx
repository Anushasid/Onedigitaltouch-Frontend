import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8081/api/v1/usernotification/all')
      .then(response => response.json())
      .then(data => setNotifications(data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <h4>{notification.title}</h4>
            <p>{notification.message}</p>
            <span>{new Date(notification.date).toLocaleString()}</span>
          </div>
        ))
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
}

export default Notifications;
