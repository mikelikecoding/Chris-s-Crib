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
      <div className="container scroll">
        <h1>Make a Donation</h1>
        <p>Your support helps us provide essential services to those in need. Thank you for your generosity!<br /> Please feel free to read the content below!</p>

        {/* Option 1: Embedded Zeffy Form */}
        {zeffyEmbed}
        
       
        {responseMessage && <p>{responseMessage}</p>}

        <p>If you prefer, you can also donate directly via Zelle:</p>
        <ul>
          <li>Email: chriscrib710@gmail.com, or </li>
          <li>Phone: (510) 872-2204</li>
        </ul>
      </div>
    </section>
  );
}

export default Donations;

// FOR FUTURE REFACTORING

// const [useEmbed, setUseEmbed] = useState(true);

// return (
//   <section id="donations">
//     <div className="container">
//       <h1>Make a Donation</h1>
//       <p>Your support helps us provide essential services to those in need. Thank you for your generosity!</p>

//       <div className="donation-options">
//         <button onClick={() => setUseEmbed(true)} className="cta-button">Use Embedded Form</button>
//         <button onClick={() => setUseEmbed(false)} className="cta-button">Redirect to Zeffy</button>
//       </div>

//       {useEmbed ? (
//         zeffyEmbed
//       ) : (
//         <p>
//           <a href="https://www.zeffy.com/fundraising/chriss-crib" target="_blank" rel="noopener noreferrer">
//             Click here to donate on Zeffy's website
//           </a>
//         </p>
//       )}

//       <p>If you prefer, you can also donate directly via Zelle:</p>
//       <ul>
//         <li>Email: chriscrib710@gmail.com</li>
//         <li>Phone: (510) 650-1618</li>
//       </ul>
//     </div>
//   </section>
// );
