import React from "react";
import useForm from "../hooks/use-form";
import TextInput from "./inputs/text-input";
import RadioInput from "./inputs/radio-input";
import TextareaInput from "./inputs/textarea-input";
import CheckboxInput from "./inputs/checkbox-input";
import SelectInput from "./inputs/select-input";

function FormPanel({
  title,
  btnName,
  submitCallback,
  model,
  closeContactForm,
  onClick,
}) {
  const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);

  const Components = {
    TextInput,
    RadioInput,
    TextareaInput,
    CheckboxInput,
    SelectInput,
  };

  const capitalize = (expression) =>
    expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = (input) => {
    const Component = Components[capitalize(input.type) + "Input"];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  };

  return (
    <section>
      <h3 className="uk-heading-divider uk-text-center">
        <span style={{ marginRight: "20px" }}>{title}</span>
        <i
          className="far fa-times-circle"
          onClick={onClick}
          style={{ fontSize: "1em" }}
        ></i>
      </h3>

      <form>
        {inputs.map((input) => renderInput(input))}
        <div className="uk-text-center">
          <input
            style={{ marginBottom: "10px" }}
            type="submit"
            onClick={setSubmit}
            value={btnName}
            className="uk-button uk-button-primary uk-margin-top"
          />
          <button
            type="button"
            className="btn btn-danger uk-button uk-button-primary uk-margin-top"
            onClick={onClick}

            // style={{
            //   color: "#fff",
            //   border: "1px solid transparent",
            //   cursor: "pointer",
            //   marginTop: "10px",
            //   marginLeft: "10px",
            // }}
          >
            Annuler
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormPanel;
