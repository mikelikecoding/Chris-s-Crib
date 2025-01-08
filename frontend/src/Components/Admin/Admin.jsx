import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles2/admin.css";

const Admin = () => {
  const [view, setView] = useState("dashboard");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authorized when the component mounts
    const checkAuthorization = async () => {
      try {
        const response = await fetch("/api/auth/validate", {
          method: "GET",
          credentials: "include", // Ensures cookies are sent with the request
        });

        if (response.ok) {
          const data = await response.json();
          if (data.role === "admin") {
            setIsAuthorized(true);
          } else {
            throw new Error("Unauthorized");
          }
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        console.error(error.message);
        navigate("/login"); // Redirect to login if unauthorized
      }
    };

    checkAuthorization();
  }, [navigate]);

  const handleViewChange = (newView) => setView(newView);

  if (!isAuthorized) {
    return <div>Loading...</div>; // Show a loading message while verifying
  }

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* Sidebar for navigation */}
      <aside className="admin-sidebar">
        <button onClick={() => handleViewChange("dashboard")}>Dashboard</button>
        <button onClick={() => handleViewChange("manageServices")}>
          Manage Services
        </button>
        <button onClick={() => handleViewChange("donationReports")}>
          Donation Reports
        </button>
        <button onClick={() => handleViewChange("manageUsers")}>
          Manage Users
        </button>
      </aside>

      {/* Main content area */}
      <main className="admin-content">
        {view === "dashboard" && (
          <section>
            <h2>Welcome to the Admin Dashboard</h2>
            <p>From here, you can manage the core operations of the website.</p>
          </section>
        )}
        {view === "manageServices" && (
          <section>
            <h2>Manage Services</h2>
            <p>Update the services offered by the nonprofit.</p>
            {/* Add form or service list here */}
          </section>
        )}
        {view === "donationReports" && (
          <section>
            <h2>Donation Reports</h2>
            <p>View and analyze donation data.</p>
            {/* Add charts or tables to display donation data */}
          </section>
        )}
        {view === "manageUsers" && (
          <section>
            <h2>Manage Users</h2>
            <p>View or update user information as needed.</p>
            {/* Add user management table or forms */}
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
