import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <a className='company-logo' href='/'>
        {/* <span className='metro-funding'>Metro Funding</span>
        <span className='nyc'>NYC</span> */}
        <img src='/metro-funding-nyc-logo.svg' alt='metro-funding-nyc-logo' />
      </a>

      <nav className='navbar-right'>
        <ul className='navbar-right-list'>
          <li className='navbar-item home-navbar-item'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar-item'>
            <a href='/#why-choose-us'>Why Us</a>
          </li>
          <li className='navbar-item funding-options-navbar-item'>
            <a href='/#funding-options'>Funding Options</a>
          </li>
          <li className='navbar-item'>
            <a href='/#how-it-works'>How It Works</a>
          </li>
          <li className='navbar-item'>
            <a href='/#about-us'>About Us</a>
          </li>
          {/* <li className='navbar-item'>
            <a className='company-phone' href='tel:+1234567890'>
              (234) 567-890
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
