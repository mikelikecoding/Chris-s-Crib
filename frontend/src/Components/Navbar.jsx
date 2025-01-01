import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "../Styles/navbar.css"; // Assuming you're using CSS for styling

function Navbar() {
  return (
    <nav className='nav'>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/donations">Donations</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Add Admin Login link */}
          <li>
            {/* <Link to="/admin/login">Admin</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
