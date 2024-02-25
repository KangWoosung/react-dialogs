/* 2024-02-25 18:18:14

In React, You cannot access to a Dom directly, we are working with the Virtual DOM in React.
  This is wrong:
  const dialogDom = document.querySelector('dialog');
  dialogDom.showModal();

Access to a VirtualDOM with useRef instance.
  <dialog ref={dialogRef}>
  dialogRef.current?.showModal();
This is Important. Remember it well!!

Dialog Background click event handling :
  It looks little bit confusing. But ust remember and copy this code when you need.
  Or make a universal Modal Component.
  onClick={(e) => {
    if (e.currentTarget === e.target) {
      toggleDialog();
    }
  }}


*/

import React, { useRef, useState } from "react";
import ModalContent1 from "../dialogs/ModalContent1";
import ModalContent2 from "../dialogs/ModalContent2";

const Version1 = () => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <h1>Version01</h1>
      <p className="read-the-docs">Let's create some dialogs..</p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <button
          onClick={() => {
            setDialogContent(<ModalContent1 />);
            toggleDialog();
          }}
        >
          Dialog 1
        </button>
        <button
          onClick={() => {
            setDialogContent(<ModalContent2 />);
            toggleDialog();
          }}
        >
          Dialog 2
        </button>
      </div>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
      >
        {dialogContent}
        <button onClick={toggleDialog}>close</button>
      </dialog>
    </>
  );
};

export default Version1;
