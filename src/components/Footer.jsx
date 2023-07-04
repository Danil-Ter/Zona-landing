import React from "react";
import Logo from "../images/Logo.png";
import calling from "../images/footer/calling.svg";
import Location from "../images/footer/Location.svg";
import Message from "../images/footer/Message.svg";

import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer wow animate__animated animate__zoomIn">
      <div className="footer__top">
        <div>
            <img  className="Logo" src={Logo} alt="logo" />
            <ul className="footer__list">
                <li><a className="footer__link" href="#"><img src={Location} alt="Location" />Dhaka, Bangladesh</a></li>
                <li><a className="footer__link" href="#"><img src={calling} alt="calling" />0943833399</a></li>
                <li><a className="footer__link" href="#"><img src={calling} alt="calling" />0943833399</a></li>
                <li><a className="footer__link" href="#"><img src={Location} alt="Location" />support@zone.com</a></li>
            </ul>
        </div>
        <div>
            <h2 className="footer__title">Service:</h2>
            <ul className="footer__list footer__list__none" >
                <li><a className="footer__link" href="#">Order Management</a></li>
                <li><a className="footer__link" href="#">Social Assistant</a></li>
                <li><a className="footer__link" href="#">Crypto Platform</a></li>
                <li><a className="footer__link" href="#">Analyzer of the News</a></li>
            </ul>
        </div>
        <div>
            <h2 className="footer__title">Company :</h2>
            <ul className="footer__list footer__list__none">
                <li><a className="footer__link" href="#">About Us</a></li>
                <li><a className="footer__link" href="#">News </a></li>
                <li><a className="footer__link" href="#">Our trusted partner</a></li>
                <li><a className="footer__link" href="#">New users FAQ</a></li>
            </ul>
        </div>
        <div>
            <h2 className="footer__title">Supports :</h2>
            <ul className="footer__list footer__list__none">
                <li><a className="footer__link" href="#">Help center</a></li>
                <li><a className="footer__link" href="#">Feedbcak </a></li>
                <li><a className="footer__link" href="#">Contact us</a></li>
                <li><a className="footer__link" href="#">Terms conditins</a></li>
            </ul>
        </div>
        <div>
            <h2 className="footer__title">Resources:</h2>
            <ul className="footer__list footer__list__none">
                <li><a className="footer__link" href="#">Download app</a></li>
                <li><a className="footer__link" href="#">Blog </a></li>
                <li><a className="footer__link" href="#">What’s new</a></li>
                <li><a className="footer__link" href="#">Sitemap</a></li>
            </ul>
        </div>       
        
      </div>
      <div className="footer__bottom">
        <a href="#" className="footer__links">Privacy</a>
        <a href="#" className="footer__links">Security</a>
        <a href="#" className="footer__links">Terms</a>
      </div>
    </div>
  );
}
