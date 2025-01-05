// src/Components/Logo.jsx
import React from "react";
const backendUrl = "http://localhost:5001/api/images"; // Replace with your backend URL

const Header = () => (
  <header>
    <img
      src={`${backendUrl}/logo.png`} // Dynamically load the logo image
      alt="Nonprofit Logo"
      className="logo" // Preserve the className attribute
      width="32"
    />
  </header>
);

export default Header;
