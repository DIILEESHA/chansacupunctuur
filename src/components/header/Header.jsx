import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdArrowOutward } from "react-icons/md";
import "slick-carousel/slick/slick-theme.css";
import slid from "./slider.json";
// import { NextArrow, PrevArrow } from './CustomArrows';
import { PrevArrow, NextArrow } from "./CustomArrows.jsx";
import { Link } from "react-router-dom";

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1400,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  fade: true, // Set fade to true for a smooth transition
  cssEase: "linear", // Use linear easing for fade effect
  adaptiveHeight: true, // Adjust height dynamically
};

const Header = () => {
  return (
    <div className="slde_setting">
      <Slider {...settings}>
        {slid.map((doc, index) => (
          <>
            <div key={index} className="slider_container">
              <img alt={doc.title} src={doc.image} className="slide-image" />

              <div className="slider_title_section">
              <div className="content">
          <div className="sub_content">
            <h5>chan's Acupunctuur</h5>
            <h1>{doc.title}</h1>
            <h2>{doc.names}</h2>

            <div className="form_section">
              <form action="" className="contact_form"></form>
            </div>

            <Link className="yu" to="/shop">
              <button >Contact us</button>
            </Link>
          </div>
        </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
