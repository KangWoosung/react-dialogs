/*  2024-02-25 19:25:11


What if... 
  dialog receives cva function??? 


npm install @heroicons/react

Forget the cva. That's too much complicated. It'll kill someone.

1. Just make several dialog templates and put them in /dialogs folder
2. And use them as : 
        <button
          onClick={() => {
            setDialogContent(
              <ModalContent1 dialogMsg={"This is a normal dialog."} />
            );
            toggleDialog();
          }}
        >
          Dialog 1
        </button>

*/

import React, { useRef, useState } from "react";
import ModalContent1 from "../dialogs/ModalContent1";
import ModalContent2 from "../dialogs/ModalContent2";
import Dialog from "../dialogs/Dialog";
import { Button, ButtonWrapper } from "../buttons/Button";
import { ButtonVariants } from "../buttons/types";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const intents = [
  "primary",
  "secondary",
  "soft",
] satisfies ButtonVariants["intent"][];
const sizes = ["xs", "sm", "md", "lg", "xl"] satisfies ButtonVariants["size"][];
// const iconPositions = ["leadingIcon", "trailingIcon"] as const;

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

  const iconProps = { trailingIcon: CheckCircleIcon };

  return (
    <>
      <h1>Version03</h1>
      <p className="read-the-docs">Let's create some dialogs..</p>
      <div
        style={{
          display: "flex",
          gap: "10rem",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <ButtonWrapper key={intents[0]}>
          <Button
            key={sizes[0]}
            intent={intents[0]}
            size={sizes[0]}
            {...iconProps}
          >
            Button text
          </Button>
        </ButtonWrapper>

        <button
          onClick={() => {
            setDialogContent(
              <ModalContent1 dialogMsg={"This is a normal dialog."} />
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
                dialogMsg={"이렇게 또 카운트가 올라가는 거지..ㅋㅋㅋ"}
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
      <section>
        <h2>
          Forget the cva. That's too much complicated. It'll kill someone.
        </h2>
        <pre>
          1. Just make several dialog templates and put them in /dialogs folder
          2. And use them as :
        </pre>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
        <button
          onClick={() => {
            setDialogContent(
              <ModalContent1 dialogMsg={"This is a normal dialog."} />
            );
            toggleDialog();
          }}
        >
          Dialog 1
        </button>
          `}
        </SyntaxHighlighter>
      </section>
      <section>
        <pre></pre>
      </section>
    </>
  );
};

export default Version2;
