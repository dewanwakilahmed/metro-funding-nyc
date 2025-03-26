"use client";

import React from "react";
import "./contact-us.css";

const ContactUs = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);

    console.log(formData);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxOBAMiKABbio5dnWel985W94GAnK3J1AMVwirTZZxEYARcfloitau9Pjs9yAgqrb9e/exec",
      {
        // Replace YOUR_WEB_APP_URL with your actual URL
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Thank you for your message. We will get back to you soon!");
      // event.target.reset(); // Optional: Reset form
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className='contact-us-section'>
      <h3 className='contact-us-title'>Contact Us</h3>

      <div className='contact-us-content'>
        <form className='contact-us-form' onSubmit={handleSubmit}>
          <div className='contact-us-item'>
            <label>Business Name:</label>
            <input
              type='text'
              id='Business Name'
              name='Business Name'
              required
            />
          </div>
          <div className='contact-us-item'>
            <label>Merchant Name:</label>
            <input
              type='text'
              id='Merchant Name'
              name='Merchant Name'
              required
            />
          </div>
          <div className='contact-us-item'>
            <label>Phone Number 1:</label>
            <input
              type='text'
              id='Phone Number 1'
              name='Phone Number 1'
              required
            />
          </div>
          <div className='contact-us-item'>
            <label>Phone Number 2:</label>
            <input type='text' id='Phone Number 2' name='Phone Number 2' />
          </div>
          <div className='contact-us-item'>
            <label>Email:</label>
            <input type='text' id='Email' name='Email' required />
          </div>
          <div className='contact-us-item'>
            <label>Desired Funding Amount:</label>
            <input
              type='text'
              id='Desired Funding Amount'
              name='Desired Funding Amount'
              required
            />
          </div>
          <div className='contact-us-item'>
            <label>Average Gross Monthly Revenue:</label>
            <input
              type='text'
              id='Average Gross Monthly Revenue'
              name='Average Gross Monthly Revenue'
              required
            />
          </div>
          <div className='contact-us-item checkbox-item'>
            <input
              type='checkbox'
              id='SMS Updates'
              name='SMS Updates'
              required
            />
            <label className='checkbox-label' htmlFor='SMS Updates'>
              By providing your phone number, you agree to receive recurring
              automated promotional and personalized marketing text messages
              (e.g., cart reminders) from Metro Funding NYC at the cell number
              used when signing up. Consent is not a condition of any purchase.
              Reply STOP to unsubscribe, HELP for help. Message and data rates
              may apply.
            </label>
          </div>

          <div className='contact-us-item submit-btn-item'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
