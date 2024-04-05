import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-content'>
        <h4 className='footer-heading'>Metro Funding NYC</h4>
        <ul className='footer-links'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/#why-choose-us'>Why Us</a>
          </li>
          <li>
            <a href='/#funding-options'>Funding Options</a>
          </li>
          <li>
            <a href='/#how-it-works'>How It Works</a>
          </li>
          <li>
            <a href='/#about-us'>About Us</a>
          </li>
          <li>
            <a href='/privacy-policy'>Privacy Policy</a>
          </li>
          <li>
            <a href='/terms-and-conditions'>Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Metro Funding NYC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
