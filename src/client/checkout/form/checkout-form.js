import React, { useState } from "react";
import { useInput } from "./custom-input-hooks";
import "./checkout.css";

const CheckoutForm = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  /**
   * CUSTOM FORM
   */
  const {
    value: firstname,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: address, bind: bindAddress, reset: resetAddress } = useInput(
    ""
  );

  const { value: city, bind: bindCity, reset: resetCity } = useInput("");
  const {
    value: expmonth,
    bind: bindExpmonth,
    reset: resetExpmonth,
  } = useInput("");
  const { value: state, bind: bindState, reset: resetState } = useInput("");
  const { value: zip, bind: bindZip, reset: resetZip } = useInput("");
  const { value: cvv, bind: bindCvv, reset: resetCvv } = useInput("");
  //   const { value: sameadr, bind: bindSameAdr, reset: resetSameAdr } = useInput(
  //     ""
  //   );

  const { value: expyear, bind: bindExpYear, reset: resetExpYear } = useInput(
    ""
  );

  const {
    value: cardname,
    bind: bindCardName,
    reset: resetCardName,
  } = useInput("");

  const {
    value: cardnumber,
    bind: bindCardNumber,
    reset: resetCardNumber,
  } = useInput(" ");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `Submitting Name ${firstname} ${email} ${address} ${city}
       ${state}${zip} ${state} ${cardname} ${cardnumber} ${expmonth} ${expyear} ${cvv}`
    );
    resetFirstName();
    resetEmail();
    resetAddress();
    resetCity();
    resetState();
    resetZip();
    resetCardName();
    resetCardNumber();
    resetExpYear();
    resetCvv();
    resetExpmonth();
  };

  return (
    <div id="style-sheet-modern">
      <div className="row">
        <div className="col-75">
          <div className="container">
            <div className="row" style={{ width: "max-content" }}>
              <div className="col-50">
                <h3>Billing Address</h3>
                <label htmlFor="fname">
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                  {...bindFirstName}
                />
                <label htmlFor="email">
                  <i className="fa fa-envelope"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="john@example.com"
                  name="email"
                  {...bindEmail}
                />

                <label htmlFor="adr">
                  <i className="fas fa-address-card"></i>Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="542 W. 15th Street"
                  {...bindAddress}
                ></input>
                <label htmlFor="city">
                  <i className="fas fa-university"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  {...bindCity}
                ></input>
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="NY"
                      {...bindState}
                    ></input>
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      {...bindZip}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i
                    className="fab fa-cc-visa"
                    style={{ color: "navy", marginRight: "5px" }}
                  ></i>
                  <i
                    className="fab fa-cc-amex"
                    style={{ color: "blue", marginRight: "5px" }}
                  ></i>
                  <i
                    className="fab fa-cc-mastercard"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  <i
                    className="fab fa-cc-discover"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <label htmlFor="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                  {...bindCardName}
                ></input>
                <label htmlFor="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                  {...bindCardNumber}
                ></input>
                <label htmlFor="expmonth">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                  {...bindExpmonth}
                ></input>

                <div className="row" style={{ width: "max-content" }}>
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input
                      type="text"
                      id="expyear"
                      name="expyear"
                      placeholder="2018"
                      {...bindExpYear}
                    ></input>
                  </div>
                  <div className="col-50">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="352"
                      {...bindCvv}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input
                onChange={handleClick}
                checked={checked}
                type="checkbox"
                name="sameadr"
              />{" "}
              Shipping address same as billing
            </label>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Continue to checkout
            </button>
            {/* <input 
              type="submit"
              value="Continue to checkout"
              className="button"
            ></input> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CheckoutForm };
