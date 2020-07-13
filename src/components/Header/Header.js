import React from "react";
import './headerstyle.css'

function Header() {
  return (
    <header className="header">
      <nav className="header-menu">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>Social media</div>
    </header>
  );
}

export default Header;
