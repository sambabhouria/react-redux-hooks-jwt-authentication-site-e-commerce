import React from "react";

import RegisterForm from "./components/register-form";

function FormContact({ onClick }) {
  return (
    <div id="contactus">
      <section id="contact-section">
        <div className="app">
          <RegisterForm onClick={onClick} />
        </div>
      </section>
    </div>
  );
}

export { FormContact };
