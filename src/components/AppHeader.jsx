import React from 'react';
import { User, Search } from 'lucide-react';
import '../styles/AppHeader.css';

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="left-header">
        <h1>Dashboard</h1>
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right-header">
        <span className="greeting">Welcome, Dr. Smith</span>
        <div className="avatar">
          <User className="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
