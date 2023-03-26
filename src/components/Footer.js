import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaSearchLocation,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          
          <div>
            <p>Haile Selasie St.</p>
            <h4>Nairobi, Kenya</h4>
          </div>
          </div>




          
        </div>
      </div>
    </div>
  );
}

export default Footer;
