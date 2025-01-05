import React from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const backendUrl = "http://localhost:5001/api/images"; // Replace with your backend URL


  return (
    <div
      className="home container"
      id="home"
      style={{
        backgroundImage: `url(${backendUrl}/shower2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "66.3vh", // Adjust as needed
      }}
    >
      <header className="hero-section">
        {/* <h1>Welcome to Chris's Crib</h1> */}
      </header>

      <section className="mission">
        <p>
          At Chris's Crib, our mission for the homeless by mid 2025 with your
          help!
        </p>
        <p>
          Our goal is to give dignity and hope to those in need, with the
          support of generous donors
        </p>
        <p>
          We'll provide homeless individuals access to showers, laundry
          services, and clothing.
        </p>
        <p>
          Your support will help provide essential services for those in need.
        </p>
      </section>

      <div className="cta-buttons ">
        <button className="cta-button p">
          <Link to="/donations">
            <button
              className="cta-button"
              style={{ color: "white", textDecoration: "none" }}
            >
              Donate Now!
            </button>
          </Link>
        </button>

        <button className="cta-button p b">
          <Link to="/services">
            <button
              className="cta-button"
              style={{ color: "white", textDecoration: "none" }}
            >
              Learn About Our Services!
            </button>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
