"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"



const ContacthtmlForm = () => {
  const [capVal, setCapVal] =useState(null)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_svjbyqd', 'template_tfcmekg', form.current, {
        publicKey: 'MUrXdjL-6yZpi0TUk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" name="user_name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" name="user_email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea name="message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <div className="flex justify-end">
        <ReCAPTCHA sitekey="6LfIRg8qAAAAAHPIx4cCpBl9f-DsdK_4sjZvy43t"
        onChange={val=> setCapVal(val)}
        
        
        />
        <input disabled={!capVal} type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer" />
      </div>
    </form>
    
    )
};

export default ContacthtmlForm
