import React from 'react';

const ActivityFeed = () => {
  const activities = [
    { time: 'Just now', detail: 'Dr. Smith updated patient John Doe’s record' },
    { time: '10 min ago', detail: 'New appointment scheduled for Jane Smith' },
    { time: '1 hour ago', detail: 'Lab results added to Michael Lee’s file' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
            <div>
              <p className="text-sm text-gray-700">{activity.detail}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
