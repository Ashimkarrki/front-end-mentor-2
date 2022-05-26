import React from "react";
import c from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import insta from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <img src={c} alt="c" className="c" />
      <div className="footer__fill">
        <h5>FAQs</h5>
        <h5>Privacy Policy</h5>
        <h5>Install Guide</h5>
        <h5>Contact us</h5>
        <h5>Press Kit</h5>
      </div>
      <div className="social__media">
        <img src={fb} alt="fb" className="fb" />
        <img src={twitter} alt="twitter" className="twitter" />
        <img src={insta} alt="insta" className="insta" />
      </div>
    </div>
  );
};

export default Footer;
