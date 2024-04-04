import React from "react";

import "./about-us.css";

import { FaBuilding } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section className='about-us-section'>
      <h3 className='about-us-title'>About Metro Funding NYC</h3>

      <div className='about-us-content'>
        <div className='about-us-item'>
          <FaBuilding className='about-us-item-icon' />
          <h4 className='about-us-item-title'>Our Story</h4>
          <p className='about-us-item-desc'>
            In the bustling heart of New York City, Metro Funding NYC was born
            out of a desire to redefine the financial landscape for small and
            medium-sized businesses. Since our establishment in 2024, we&apos;ve
            embarked on a mission to not just offer funding, but to provide a
            beacon of hope and a pathway to success for the dreamers and doers
            shaping the future of securing business funding. Our foundation is
            built on the pillars of resilience, innovation, and an unwavering
            commitment to service, propelling us forward as we strive to unlock
            the potential of every business we touch. With each story of
            success, we&apos;re reminded of why we started: to empower
            businesses to break through barriers and soar to new heights.
          </p>
        </div>

        <div className='about-us-item'>
          <GiCompass className='about-us-item-icon' />
          <h4 className='about-us-item-title'>Our Mission</h4>
          <p className='about-us-item-desc'>
            At the core of Metro Funding NYC lies a profound mission to
            dismantle the financial hurdles that stifle business growth.
            We&apos;re here to light the way for small businesses, guiding them
            through the complexities of business funding with a spirit of
            partnership and collaboration. Our mission transcends the
            transactional; we&apos;re invested in the stories, the challenges,
            and the triumphs of the businesses we serve. By offering bespoke
            funding solutions, we aspire to be more than a lender—we aim to be a
            trusted ally in your business&apos;s journey. From the seed of an
            idea to the fruits of success, we&apos;re dedicated to empowering
            businesses to realize their vision, fostering growth, innovation,
            and prosperity within the vibrant tapestry of our communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
