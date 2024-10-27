import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.user_email.value);

    emailjs
      .sendForm('service_ts90omb', 'template_l922ieg', form.current, {
        publicKey: 'bDdum3pdzcVJ35Vij',
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
    <div className="page">
      <h1 className="heading">Contact</h1>
      <hr />
      <form ref={form} onSubmit={sendEmail} className="contact">
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="text" name="user_surname" placeholder="Surname" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Reason for contact" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
