// Donations.jsx: Refactored to include Zeffy Integration Options
import React, { useState } from 'react';
import "../Styles/donations.css"

function Donations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    donationAmount: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

//   ZEFFY CODE BELOW/////////////////

//   Handle form submission for Zeffy-hosted donation
  
//   const handleZeffyRedirect = () => {
//     const redirectURL = `https://www.zeffy.com/en-US/donation-form/your-form-id?name=${formData.name}&email=${formData.email}&donationAmount=${formData.donationAmount}&message=${formData.message}`;
//     window.location.href = redirectURL;
//   };

  // Embed Zeffy Form (Alternative)
  const zeffyEmbed = (
    <iframe
        src="https://www.zeffy.com/fundraising/chriss-crib"
        title="Donation Form"
        width="100%"
        height="600px"
        frameBorder="0"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
  );

  ////////////////////////////////////////////

//    Find out is my Zeffry being handle by embedding their form (via iframe) or providing a redirect link to their hosted donation form?

//   ZEFFY CODE ABOVE//////////////////////

  return (
    <section id="donations">
      <div className="container">
        <h1>Make a Donation</h1>
        <p>Your support helps us provide essential services to those in need. Thank you for your generosity!</p>

        {/* Option 1: Embedded Zeffy Form */}
        {zeffyEmbed}

        {/* Option 2: Redirect to Zeffy-hosted Form */}
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            handleZeffyRedirect();
          }}
        > */}
          {/* <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="donationAmount">Donation Amount ($)</label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Submit Donation via Zeffy'}
          </button>
        </form> */}

        {responseMessage && <p>{responseMessage}</p>}

        <p>If you prefer, you can also donate directly via Zelle:</p>
        <ul>
          <li>Email: chriscrib710@gmail.com</li>
          <li>Phone: (510) 650-1618</li>
        </ul>
      </div>
    </section>
  );
}

export default Donations;
