import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const appointments = [
    { name: 'John Doe', time: '10:00 AM', status: 'Completed' },
    { name: 'Jane Smith', time: '11:30 AM', status: 'Cancelled' },
    { name: 'Alice Brown', time: '1:00 PM', status: 'Scheduled' },
  ];

  return (
    <div className="UpcomingSchedule">
      <h2>Upcoming Schedule</h2>
      {appointments.map((appt, index) => (
        <SimpleAppointmentCard
          key={index}
          name={appt.name}
          time={appt.time}
          status={appt.status}
        />
      ))}
    </div>
  );
};

export default UpcomingSchedule;
