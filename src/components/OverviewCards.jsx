import React from 'react';
import '../styles/OverviewCards.css';
import {
  User,
  Calendar,
  Stethoscope,
  FileText
} from 'lucide-react';

const cards = [
  {
    icon: <User size={24} />,
    label: 'Patients',
    value: '1,320'
  },
  {
    icon: <Calendar size={24} />,
    label: 'Appointments',
    value: '230'
  },
  {
    icon: <Stethoscope size={24} />,
    label: 'Doctors',
    value: '38'
  },
  {
    icon: <FileText size={24} />,
    label: 'Reports',
    value: '128'
  }
];

const OverviewCards = () => {
  return (
    <div className="OverviewCards">
      {cards.map((card, index) => (
        <div key={index} className="overview-card">
          <div className="icon">{card.icon}</div>
          <div className="text">
            <div className="label">{card.label}</div>
            <div className="value">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
