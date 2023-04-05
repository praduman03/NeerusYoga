import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3 style={{ fontFamily: "Font", color: "Black" }}>Neeru's Yoga</h3>

          <p class="footer-links">
            <Link to="/" className="link-1">
              | Home
            </Link>
            <Link to="/AboutUs" className="link-1">
              | About Us
            </Link>
            <Link to="/AboutYoga" className="link-1">
              | About Yoga
            </Link>
            <Link to="/Contact" className="link-1">
              | Contact US
            </Link>
          </p>

          <p class="footer-company-name">Neeru's Yoga © 2023</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>20, West Patel Nagar, Ratanada,</span> Jodhpur, Rajasthan
              (INDIA)
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <a
              style={{ textDecoration: "none", color: "Black" }}
              href="tel: 917568970169"
            >
              +91 75689 70169
            </a>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About Neeru Yoga</span>
            Mrs. Neeru Kachhwaha has a Certified Yoga teacher with a experience
            of more than 15 years.
          </p>

          <div class="footer-icons">
            <a href="https://www.facebook.com/people/Neerus-Yoga/100063816976516/">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/neeru_kachhwaha/?hl=en">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC6AKKeLnTdgo_3acr4Rsbag">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/neeru.kachhwaha/">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
