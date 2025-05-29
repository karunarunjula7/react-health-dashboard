import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2 className="logo">Health<span>care.</span></h2>

      <div className="nav-section">
        <p className="section-title">General</p>
        <ul>
          <li><i className="fas fa-th-large"></i> Dashboard</li>
          <li><i className="fas fa-clock"></i> History</li>
          <li><i className="fas fa-calendar-alt"></i> Calendar</li>
          <li><i className="fas fa-user-md"></i> Appointments</li>
          <li><i className="fas fa-chart-bar"></i> Statistics</li>
        </ul>
      </div>

      <div className="nav-section">
        <p className="section-title">Tools</p>
        <ul>
          <li><i className="fas fa-comments"></i> Chat</li>
          <li><i className="fas fa-headset"></i> Support</li>
        </ul>
      </div>

      <div className="nav-section bottom">
        <ul>
          <li><i className="fas fa-cog"></i> Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
