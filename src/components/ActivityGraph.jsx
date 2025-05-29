import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/ActivityGraph.css";

const data = [
  { name: "Mon", Appointments: 30 },
  { name: "Tue", Appointments: 50 },
  { name: "Wed", Appointments: 20 },
  { name: "Thu", Appointments: 60 },
  { name: "Fri", Appointments: 40 },
  { name: "Sat", Appointments: 70 },
  { name: "Sun", Appointments: 50 },
];

export default function ActivityGraph() {
  return (
    <div className="ActivityGraphContainer">
      <h3>Activity Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="Appointments"
            fill="#00b4d8"
            radius={[10, 10, 0, 0]}
            barSize={20} // It is to Reduced bar width
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
