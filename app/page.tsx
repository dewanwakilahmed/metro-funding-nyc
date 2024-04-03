import React from "react";

import "./home-page.css";

import Hero from "@/components/hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <main className='home-page'>
      <Hero />
      <WhyChooseUs />
    </main>
  );
};

export default HomePage;
