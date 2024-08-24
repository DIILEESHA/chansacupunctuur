import React, { useState } from "react";
import "./contact.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  const [showMorePijnacker, setShowMorePijnacker] = useState(false);
  const [showMoreHague, setShowMoreHague] = useState(false);

  const togglePijnacker = () => setShowMorePijnacker(!showMorePijnacker);
  const toggleHague = () => setShowMoreHague(!showMoreHague);

  return (
    <div>
      <h2 className="img_title">Location</h2>
      <div className="lino"></div>
      <div className="despa">
        <div className="service_grid">
          <div className="service_sub">
            <img
              src="https://img.freepik.com/premium-photo/gym-is-gym-with-large-mirror-wall-words-no_873925-196108.jpg?w=826"
              className="service_img"
              alt=""
            />
            {/* <a className="yu" href="http://localhost:5173/Acupunctuur"> */}
            <h2 className="service_sub_title">
              Location Pijnacker
              <MdArrowOutward className="ico" />
            </h2>
            <p className="sumiya">
              At this location we are located in Sportcentrum Pijnacker.
              Sportcentrum Pijnacker is located in the middle of the center of
              Pijnacker. It is a gym with a rich offer of fitness equipment
              including a kickboxing school.
              {showMorePijnacker ? (
                <span>
                  {" "}
                  The location is very easy to reach by public transport.
                  Parking is possible in the Ackershof garage (2 hours free
                  parking).The location offers a variety of amenities to ensure
                  a comfortable and convenient visit. From the modern fitness
                  facilities to the friendly and welcoming staff, every aspect
                  is designed to enhance your experience.
                </span>
              ) : (
                "..."
              )}
              <a href="#!" onClick={togglePijnacker}>
                {showMorePijnacker ? " Read Less" : " Read More"}
              </a>
            </p>

            {/* </a> */}
          </div>

          <div className="service_sub">
            <img
              src="https://img.freepik.com/free-photo/empty-reception-counter-waiting-room-attend-medical-appointment-with-general-practitioner-healthcare-facility-hospital-lobby-seats-private-clinic-checkup-examination_482257-50493.jpg?ga=GA1.2.522343137.1721932957&semt=ais_hybrid"
              className="service_img"
              alt=""
            />
            {/* <Link className="yu" to="/afvallen"> */}
            <h2 className="service_sub_title">
              Location The Hague
              <MdArrowOutward className="ico" />
            </h2>
            <p className="sumiya">
              At this location we are located in a medical center. The location
              is accessible by public transport or by car. Free parking is
              available in the immediate vicinity.
              {showMoreHague ? (
                <span>
                  {" "}
                  The medical center is equipped with state-of-the-art
                  facilities, ensuring a professional and comfortable
                  environment for all your healthcare needs. The friendly staff
                  and convenient location make it an ideal choice for those
                  seeking quality medical care.
                </span>
              ) : (
                "..."
              )}
              <a href="#!" onClick={toggleHague}>
                {showMoreHague ? " Read Less" : " Read More"}
              </a>
            </p>
            {/* </Link> */}
          </div>
        </div>
        <div className="map_locations">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60735337.80561801!2d-2.5920426885031125!3d21.703080600093706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ca28dff1a7ab%3A0x751a106b7d7e6b3c!2sAckershof%2036b%2C%202641%20DZ%20Pijnacker%2C%20Netherlands!5e0!3m2!1sen!2slk!4v1724521160163!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: "0" }}
            //   allowfullscreen=""
            loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <h2 className="img_title">CONTACT US</h2>
      <div className="lino"></div>

      <div className="FORM_GRID">
        <div className="form_suber e">
          <div className="soca">
            <BsInstagram className="lpo" />
            <FaFacebook className="lpo" />
            <BsLinkedin className="lpo" />
          </div>
          <div className="comb">
            <div className="deva">
              <h2 className="otr">Email</h2>
              <a className="mi" href="mailto:info@chansacupunctuur.nl">
                info@chansacupunctuur.nl
              </a>
            </div>
            <div className="modq">
              <MdEmail />
            </div>
          </div>
          <div className="comb">
            <div className="deva">
              <h2 className="otr">Phone</h2>
              <a className="mi" href="tel:+31683601528">
                +31 6 83 60 15 28
              </a>
            </div>
            <div className="modq">
              <BiPhone />
            </div>
          </div>
        </div>

        <div className="form_suber y">
          <form className="gunda" action="">
            <div className="secca">
              <label className="labba" htmlFor="">
                Name
              </label>
              <input type="text" className="inpa" />
            </div>
            <div className="secca">
              <label className="labba" htmlFor="">
                Email
              </label>
              <input type="email" className="inpa" />
            </div>
            <div className="secca">
              <label className="labba" htmlFor="">
                Message
              </label>
              <textarea className="muripa" name="" id=""></textarea>
            </div>
            <div className="ha">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
