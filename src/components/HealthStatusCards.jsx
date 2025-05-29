import React from 'react';
import { Heart, Activity, Thermometer, Droplet } from 'lucide-react';
import '../styles/HealthStatusCards.css';

const cards = [
  { icon: <Heart size={28} color="#ff4d4f" />, label: 'Heart Rate', value: '72 bpm' },
  { icon: <Activity size={28} color="#1890ff" />, label: 'Blood Pressure', value: '120/80' },
  { icon: <Thermometer size={28} color="#faad14" />, label: 'Temperature', value: '98.6°F' },
  { icon: <Droplet size={28} color="#52c41a" />, label: 'Oxygen Level', value: '97%' }
];

const HealthStatusCards = () => {
  return (
    <div className="HealthStatusCards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon">{card.icon}</div>
          <div className="info">
            <div className="label">{card.label}</div>
            <div className="value">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
