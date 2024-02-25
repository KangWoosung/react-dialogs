/*  2024-02-25 17:59:15


*/

import React from "react";
import "./css/ModalContent2.css";

type ModalContent2Props = {
  dialogTitle?: string;
  dialogMsg?: string;
  buttonMsg?: string;
  toggleDialog?: () => void;
};

const ModalContent2 = ({
  dialogTitle,
  dialogMsg,
  buttonMsg,
  toggleDialog,
}: ModalContent2Props) => {
  return (
    <div className="container">
      <div className="cookiesContent" id="cookiesPopup">
        <button className="close" onClick={toggleDialog}>
          ✖
        </button>
        {dialogTitle && <h3>{dialogTitle}</h3>}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          alt="cookies-img"
        />
        <p>{dialogMsg}</p>
        <button className="accept" onClick={toggleDialog}>
          {buttonMsg}
        </button>
      </div>
    </div>
  );
};

export default ModalContent2;
