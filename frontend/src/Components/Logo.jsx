import React from 'react';
import "../Styles/logo.css"

function Logo() {
  return (
    <div className="logo-container">
      <img 
        src="/images/logo.png" 
        alt="Nonprofit Logo" 
        className="logo" 
      />
    </div>
  );
}

export default Logo;
