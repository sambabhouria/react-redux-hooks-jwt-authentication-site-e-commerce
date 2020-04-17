import React from "react";
import FormPanel from "./form-panel";
import registerFormModel from "../models/registration-model";

import "./uikit.min.css";
function RegisterForm({ onClick }) {
  const submitCallback = (e) => {
    alert(
      registerFormModel.map((m) => m.label + ": " + m.value + ",\n").join("")
    );
    closeContactForm();
  };

  const closeContactForm = () => {
    document.getElementById("contactus").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className="uk-container uk-container-small">
      <FormPanel
        title="Contact Form"
        btnName="Register"
        submitCallback={submitCallback}
        model={registerFormModel}
        closeContactForm={closeContactForm}
        onClick={onClick}
      />
    </div>
  );
}

export default RegisterForm;
