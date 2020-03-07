import React from "react";

import useModal from "./react-hooks-use-modal";

const modalStyle = {
  display: "flex",

  paddingTop: "20px",
  borderRadius: "20px",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  background:
    "linear-gradient( to bottom right, rgb(255, 255, 255), rgb(195, 195, 195) )",
  boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.63)",
  padding: "60px 100px",
  width: "500px"
};

const Modal = ({ visible, closeModal }) => {
  const [Modal] = useModal("root", {
    preventScroll: true,
    visible,
    closeModal
  });
  return (
    <div>
      <Modal>
        <div style={modalStyle}>
          <span style={{ width: "350px" }} className="alert alert-danger">
            Authent Error: Bad username or password trye again
          </span>
          <p>Username: test</p>
          <p>Password: test123</p>

          <div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeModal}
              style={{ marginRight: "20px" }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={closeModal}
            >
              Try Again
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal;
