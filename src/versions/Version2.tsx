/*  2024-02-25 18:21:50


How can I reach to the universal Modal component?
But what if we need to pass a useRef reference to another component?


1. DialogContentComponent <ModalContent1 /> receives props and generates its contents:  
    setDialogContent(
        <ModalContent1
            dialogTitle={undefined}
            dialogMsg={"This is a normal dialog."}
            buttonMsg={"close"}
            toggleDialog={toggleDialog}
        />
    );

2. DialogComponent 
    <Dialog toggleDialog={toggleDialog} ref={dialogRef} buttonOnOff={false}>
        {dialogContent}
    </Dialog>

summed:
    dialogs folder:
        - /css
        - Dialog.tsx
        - ModalContent1.tsx
        - ModalContent2.tsx
        - ..... tsx

2024-02-25 19:52:19
Job done!

*/

import React, { useRef, useState } from "react";
import ModalContent1 from "../dialogs/ModalContent1";
import ModalContent2 from "../dialogs/ModalContent2";
import Dialog from "../dialogs/Dialog";

const Version2 = () => {
  const [count, setCount] = useState<number>(0);
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
      <h1>Version02</h1>
      <p className="read-the-docs">Let's create some dialogs..</p>
      <div
        style={{
          display: "flex",
          gap: "10rem",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <button
          onClick={() => {
            setDialogContent(
              <ModalContent1
                dialogTitle={undefined}
                dialogMsg={"This is a normal dialog."}
                buttonMsg={"close"}
                toggleDialog={toggleDialog}
              />
            );
            toggleDialog();
          }}
        >
          Dialog 1
        </button>
        <button
          onClick={() => {
            setCount((p) => p + 1);
            const dTitle = `Dialog Count ${count}`;
            setDialogContent(
              <ModalContent2
                dialogTitle={dTitle}
                dialogMsg={`You just made this count up: ${count}`}
                buttonMsg={"close"}
                toggleDialog={toggleDialog}
              />
            );
            toggleDialog();
          }}
        >
          Dialog 2
        </button>
        <Dialog toggleDialog={toggleDialog} ref={dialogRef} buttonOnOff={false}>
          {dialogContent}
        </Dialog>
      </div>
    </>
  );
};

export default Version2;
