import React from "react";

import "./how-it-works.css";

import { FiFileText } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdApproval } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";

const HowItWorks = () => {
  return (
    <section className='how-it-works-section' id='how-it-works'>
      <h3 className='how-it-works-title'>
        Secure Flexible Funding in Four Easy Steps
      </h3>

      <div className='how-it-works-content'>
        <div className='how-it-works-item'>
          <FiFileText className='how-it-works-item-icon' />
          <h4 className='how-it-works-item-title'>Submit Application</h4>
          <p className='how-it-works-item-desc'>
            Kickstart your journey with a simple application. Tell us a bit
            about your business, and let&apos;s unlock flexible funding options
            tailored to your needs.
          </p>
        </div>

        <div className='how-it-works-item'>
          <FaPhoneAlt className='how-it-works-item-icon' />
          <h4 className='how-it-works-item-title'>Consult Call</h4>
          <p className='how-it-works-item-desc'>
            Receive a call from our funding experts. They&apos;ll help fine-tune
            your application and explore the best funding solutions for your
            business&apos;s growth.
          </p>
        </div>

        <div className='how-it-works-item'>
          <MdApproval className='how-it-works-item-icon' />
          <h4 className='how-it-works-item-title'>Fast Approval</h4>
          <p className='how-it-works-item-desc'>
            Our streamlined review process means quick approval times. We waste
            no time in getting back to you with a decision, so you can move
            forward without delay.
          </p>
        </div>

        <div className='how-it-works-item'>
          <RiBankFill className='how-it-works-item-icon' />
          <h4 className='how-it-works-item-title'>Quick Funding</h4>
          <p className='how-it-works-item-desc'>
            Once approved, get the funding your business needs within 24 hours.
            It&apos;s our commitment to support your business&apos;s immediate
            and future needs swiftly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
