import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import AnatomySection from './AnatomySection';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import OverviewCards from './OverviewCards';
import ActivityGraph from './ActivityGraph';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="DashboardMainContent">
      {/* Overview cards on top */}
      <div className="overview-row">
        <OverviewCards />
      </div>

      {/* Main content with 3 columns */}
      <div className="main-columns">
        {/* Left: Anatomy + Activity Graph */}
        <div className="left-column">
          <AnatomySection />
          <ActivityGraph />
        </div>

        {/* Center: Health Status Cards */}
        <div className="center-column">
          <HealthStatusCards />
        </div>

        {/* Right: Calendar, Schedule, Feed stacked */}
        <div className="right-column">
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
