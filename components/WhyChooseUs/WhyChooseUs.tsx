import React from "react";

import "./why-choose-us.css";

import { FiClock } from "react-icons/fi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import { PiHeadset } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <section className='why-choose-us-section' id='why-choose-us'>
      <h3 className='why-choose-us-title'>Why Choose Metro Funding NYC?</h3>

      <div className='why-choose-us-content'>
        <div className='why-choose-us-item'>
          <FiClock className='why-choose-us-item-icon' />
          <h4 className='why-choose-us-item-title'>Fast Approval</h4>
          <p className='why-choose-us-item-desc'>
            Experience swift funding decisions with our fast approval process,
            designed to get your business moving without delay.
          </p>
        </div>

        <div className='why-choose-us-item'>
          <IoExtensionPuzzleOutline className='why-choose-us-item-icon' />
          <h4 className='why-choose-us-item-title'>Customized Solutions</h4>
          <p className='why-choose-us-item-desc'>
            Every business is unique. That&apos;s why we offer customized
            funding solutions tailored to your specific needs and goals.
          </p>
        </div>

        <div className='why-choose-us-item'>
          <PiListMagnifyingGlassLight className='why-choose-us-item-icon' />
          <h4 className='why-choose-us-item-title'>Transparent Terms</h4>
          <p className='why-choose-us-item-desc'>
            Clarity is key to trust. Enjoy straightforward and transparent
            terms, with no hidden fees or surprises.
          </p>
        </div>

        <div className='why-choose-us-item'>
          <PiHeadset className='why-choose-us-item-icon' />
          <h4 className='why-choose-us-item-title'>Dedicated Support</h4>
          <p className='why-choose-us-item-desc'>
            Your success is our priority. Benefit from dedicated support from
            our team of experts, here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
