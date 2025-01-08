import React from "react";
import "./Styles2/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <section className="stats-overview">
        <div className="stat-card">
          <h2>Total Donations</h2>
          <p>$25,000</p>
        </div>
        <div className="stat-card">
          <h2>Active Donors</h2>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h2>Services Provided</h2>
          <p>450</p>
        </div>
        <div className="stat-card">
          <h2>Registered Users</h2>
          <p>85</p>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-container">
          <a href="/admin/services" className="quick-link">
            Manage Services
          </a>
          <a href="/admin/reports" className="quick-link">
            View Reports
          </a>
          <a href="/admin/users" className="quick-link">
            Manage Users
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
