import React from 'react';
import "../Styles/home.css"

const Home = () => {
  return (
    <div className="home container" id="home">
      <header className="hero-section">
        {/* <h1>Welcome to Chris's Crib</h1> */}
      </header>

      <section className="mission" >
        <p>At Chris's Crib, our mission for the homeless by mid 2025 with your help!</p>
        <p>Our goal is to give dignity and hope to those in need, with the support of generous donors</p>
        <p>We'll provide homeless individuals access to showers, laundry services, and clothing.</p>
        <p>Your support will help provide essential services for those in need.</p>
      </section>

      <div className="cta-buttons p">
        <button className="cta-button">
          <a href="/donations" style={{ color: 'inherit', textDecoration: 'none' }}>
            Donate Now
          </a>
        </button>
        <button className="cta-button p">
          <a href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>
            Learn About Our Services
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
