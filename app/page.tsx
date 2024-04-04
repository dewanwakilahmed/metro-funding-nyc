import React from "react";

import "./home-page.css";

import Hero from "@/components/hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FundingOptions from "@/components/FundingOptions/FundingOptions";

const HomePage = () => {
  return (
    <main className='home-page'>
      <Hero />
      <WhyChooseUs />
      <FundingOptions />
    </main>
  );
};

export default HomePage;
