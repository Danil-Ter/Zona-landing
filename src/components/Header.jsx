import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import "../styles/header.css";
import { Link } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <img src={Logo} alt="My Image" />
      <div>
        <nav>
          <ul className={`nav ${isMenuOpen ? "mobile open" : ""}`}>
            <li>
              <Link to="home" smooth={true} duration={500} onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="service" smooth={true} duration={500} onClick={handleMenuItemClick}>
                Service
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={handleMenuItemClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500} onClick={handleMenuItemClick}>
                Team
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={handleMenuItemClick}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? "change" : ""}`} />
            <div className={`bar ${isMenuOpen ? "change" : ""}`} />
            <div className={`bar ${isMenuOpen ? "change" : ""}`} />
          </div>
        </nav>
      </div>
    </div>
  );
}
