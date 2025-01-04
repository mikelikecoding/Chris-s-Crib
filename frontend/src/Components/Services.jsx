// src/Components/Services.jsx
import React from "react";
import "../Styles/services.css"
import showerImage from '../images/wash6.jpg';
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div className="container services" id="container2"
    
    style={{
      backgroundImage: `url(${showerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '66.3vh', // Adjust as needed
    }}
    
    >
      <h1>Details about the services...</h1>

      <section className="mission2">
        <p>
          What We'll be Offering for the homeless by mid 2025 with your help!!
        </p>
        <p>Access to showers three times a week for for the homeless.</p>
        <p>
          Weekly laundry services to provide clean clothes for the homeless.
        </p>
        <p>
          Monthly distribution of new T-shirts, socks, and underwear to those in
          need.
        </p>
        <p>
          Refurals to homeless sheltor and food banks, as well as mental health
          services
        </p>
        <p>
          Your support will help provide essential services for those in need.
        </p>
      </section>

      <div className="cta-buttons">
        <button className="cta-button">
        <Link to="/donations">
            <button className="cta-button"  style={{ color: 'white', textDecoration: 'none' }} >Donate Now!</button>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Services; // Add this default export
