import React from "react";
import useModal from "./modal/modal";

import { FormContact } from "./form";

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
  width: "500px",
};

const ContactModal = ({ visible, close }) => {
  const [Modal] = useModal("root", {
    preventScroll: true,
    visible,
  });

  //   const [Modal, open, close, isOpen] = useModal("root", {
  //     preventScroll: true,
  //   });
  return (
    <div>
      {/* <p>Modal is Open? {isOpen ? "Yes" : "No"}</p> */}
      {/* <button onClick={open}>OPEN</button> */}
      <Modal>
        <div style={modalStyle}>
          <FormContact onClick={close} />
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
