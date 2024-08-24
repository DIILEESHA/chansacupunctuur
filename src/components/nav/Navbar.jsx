import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/chan_logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navda">
      <div className="nav_container">
        <div className="nav_left">
          <Link className="yu" to="/" onClick={handleClicks}>
            <img className="nav_logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav_middle ${isMobileMenuOpen ? "nav_middle_hidden" : ""}`}>
          <ul className="nav_ul">
            <li className="nav_li">
              <Link className="yu" to="/treatments" onClick={handleClicks}>
                TREATMENTS
              </Link>
            </li>
            <li className="nav_li">
              <Link className="yu" to="/afvallen" onClick={handleClicks}>
                TO FALL OFF
              </Link>
            </li>
            <li className="nav_li">
              <Link className="yu" to="/voeding" onClick={handleClicks}>
                POWER SUPPLY
              </Link>
            </li>
            <li className="nav_li">
              <Link className="yu" to="/meet-team" onClick={handleClicks}>
                MEET THE TEAM
              </Link>
            </li>
            <li className="nav_li">
              <Link className="yu" to="/tarieven" onClick={handleClicks}>
                RATES
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_right">
          <ul className="nav_ul kjs">
            <Link className="yu" to="/contact-us" onClick={handleClicks}>
              <li className="nav_li lasto">CONTACT</li>
            </Link>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <FaBars />
            </div>
          </ul>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="nav_mobile_ul_section">
          <ul className="nav_mobile_ul">
            <li className="nav_mobile_li">
              <Link className="yu" to="/treatments" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                TREATMENTS
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link className="yu" to="/afvallen" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                TO FALL OFF
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link className="yu" to="/voeding" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                POWER SUPPLY
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link className="yu" to="/meet-team" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                MEET THE TEAM
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link className="yu" to="/tarieven" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                RATES
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link className="yu" to="/contact-us" onClick={() => { handleClicks(); toggleMobileMenu(); }}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
