/*  2024-02-25 17:58:35


*/
import React from "react";

type ModalContent1Props = {
  dialogTitle?: string;
  dialogMsg?: string;
  buttonMsg?: string;
  toggleDialog?: () => void;
};

const ModalContent1 = ({
  dialogTitle,
  dialogMsg,
  buttonMsg,
  toggleDialog,
}: ModalContent1Props) => {
  return (
    <div>
      {dialogTitle && <h3>{dialogTitle}</h3>}
      <div>
        <p>{dialogMsg}</p>
        <button onClick={toggleDialog}>{buttonMsg}</button>
      </div>
    </div>
  );
};

export default ModalContent1;
