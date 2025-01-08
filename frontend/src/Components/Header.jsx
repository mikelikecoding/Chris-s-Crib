import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "../Styles/header.css"

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <Logo />
        {/* <h1 className="nonprofit-name">Nonprofit Name</h1> */}
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
