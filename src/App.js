import React from 'react';
import Sidebar from './components/Sidebar';
import AppHeader from './components/AppHeader';
import DashboardMainContent from './components/DashboardMainContent';
import './App.css';

function App() {
  return (
    <div className="AppLayout">
      <Sidebar />
      <div className="MainContentArea">
        <AppHeader />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
