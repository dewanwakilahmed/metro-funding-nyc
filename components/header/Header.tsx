import React from "react";

import "./header.css";

import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='header'>
      {/* <RiMenu4Fill className='nav-menu-btn' /> */}

      <a className='company-logo' href='/'>
        <span className='metro-funding'>Metro Funding</span>
        <span className='nyc'>NYC</span>
      </a>

      <nav className='navbar-right'>
        <ul className='navbar-right-list'>
          <li className='navbar-item'>
            <a className='company-phone' href='tel:+1234567890'>
              (234) 567-890
            </a>
          </li>
          <li className='navbar-item navbar-cta'>
            <a className='btn btn-secondary' href='/explore-funding'>
              MESSAGE US
            </a>
          </li>
          <li className='navbar-item navbar-cta'>
            <a className='btn btn-primary' href='/apply-now'>
              APPLY NOW
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
