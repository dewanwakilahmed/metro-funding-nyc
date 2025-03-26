import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-content'>
        <h4 className='footer-heading'>Metro Funding NYC</h4>

        <div className='company-info'>
          <p className='company-address'>
            ADDRESS: 944 Kings Highway, Brooklyn, New York, NY 11223
          </p>
          <p className='company-phone'>PHONE: (718) 928-2605</p>
          <p className='company-email'>EMAIL: apply@metrofundingnyc.com</p>
        </div>

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
            <a href='./privacy-policy.html'>Privacy Policy</a>
          </li>
          <li>
            <a href='./terms-and-conditions.html'>Terms and Conditions</a>
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
