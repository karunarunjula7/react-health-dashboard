import React from 'react';
import '../styles/CalendarView.css';

const CalendarView = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="CalendarView">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div key={idx} className="day-header">{day}</div>
        ))}
        {Array(4).fill(null).map((_, idx) => (
          <div key={`empty-${idx}`} className="empty"></div>
        ))}
        {dates.map(date => (
          <div key={date} className="date">{date}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
