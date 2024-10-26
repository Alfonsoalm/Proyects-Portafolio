import React from "react";

export const Contacto = () => {
  return (
    <>
      <div className="page">
        <h1 className="heading">Contact</h1>
        <hr />
        <form className="contact" action="mailto:alfonsoalm34@gmail.com">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Surname"></input>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Reason for contact" />
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </>
  );
};
