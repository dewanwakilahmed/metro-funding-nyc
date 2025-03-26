import React from "react";

import "./home-page.css";

import Hero from "@/components/hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FundingOptions from "@/components/FundingOptions/FundingOptions";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";

const HomePage = () => {
  return (
    <main className='home-page'>
      <Hero />
      <WhyChooseUs />
      <FundingOptions />
      <HowItWorks />
      <AboutUs />
      <ContactUs />
    </main>
  );
};

export default HomePage;
