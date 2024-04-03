import React from "react";

import "./home-page.css";

const HomePage = () => {
  return (
    <main className='home-page'>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-headline'>
            Secure the Ideal Loan for Your Business in Just Minutes
          </h1>
          <h2 className='hero-sub-headline'>
            Your Path to Quick Funding, with No Credit Score Worries.
          </h2>
          <div className='hero-cta'>
            <a className='btn btn-primary' href='/apply-now'>
              APPLY NOW
            </a>
            <a className='btn btn-secondary' href='/explore-funding'>
              MESSAGE US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
