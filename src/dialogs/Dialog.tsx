/*  2024-02-25 18:31:50

forwardRef is somehow confusing. 
But in strait, the REF reference was ACTUALLY INSTANCED HERE and this component is Who is forwarding the ref.
Just like all the otehr props and contexts, ref was created in the parent. That's just for accessibility reason.


Parent:
    const dialogRef = useRef<HTMLDialogElement>(null);
    <Dialog toggleDialog={toggleDialog} ref={dialogRef}>

ForwardRef Component:
    const Dialog = forwardRef(({ children, toggleDialog }, ref) => {
        return (
            <dialog ref={ref}>
                {children}
                <button onClick={toggleDialog}>close</button>
            </dialog>
        );
    }));


Next Step :
How can I make a Universal Dialog Module?

1. 프로젝트에서 사용할 다이얼로그의 종류를 결정하고,
2. 각 다이얼로그의 Theme 레이아웃을 담은 /dialog/Components{id}.tsx 를 생성해 둔다. 
3. setDialogContent 

*/

import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void;
  buttonOnOff: boolean;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog, buttonOnOff }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
      >
        <div>
          {children}
          {buttonOnOff && <button onClick={toggleDialog}>close</button>}
        </div>
      </dialog>
    );
  }
);

export default Dialog;
