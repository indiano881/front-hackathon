"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContacthtmlForm = () => {

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
        <>
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </>
    )
};

export default ContacthtmlForm
