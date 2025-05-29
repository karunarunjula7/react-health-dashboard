import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ name, time, status }) => {
  return (
    <div className={`SimpleAppointmentCard ${status.toLowerCase()}`}>
      <div className="appointment-time">{time}</div>
      <div className="appointment-name">{name}</div>
      <div className="appointment-status">{status}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
