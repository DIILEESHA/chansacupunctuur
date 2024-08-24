import React from "react";
import "./para.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Parallaxd = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Parallax
        strength={270}
        className="bgClassName"
        bgImage={
          "https://images.pexels.com/photos/6187854/pexels-photo-6187854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      >
        <div className="content">
          <div className="sub_content">
            <h5>Are You Putting Up With Pain? You Shouldn’t.</h5>
            <h1>Explain Your Health Problem</h1>
            <h2>Get an Appointment</h2>

            <div className="form_section">
              <form action="" className="contact_form"></form>
            </div>

            <Link className="yu" to="/shop">
              <button onClick={handleClicks}>Contact us💬</button>
            </Link>
    
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxd;
