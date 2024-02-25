/*  2024-02-25 17:46:33

In React, You cannot access to a Dom directly, we are working with the Virtual DOM in React.
  This is wrong:
  const dialogDom = document.querySelector('dialog');
  dialogDom.showModal();

Access to a VirtualDOM with useRef instance.
  <dialog ref={dialogRef}>
  dialogRef.current?.showModal();
This is Important. Remember it well!!


How can I reach to the universal Modal component?
But what if we need to pass a useRef reference to another component?

*/

import "./App.css";
// import Version1 from "./versions/Version1";
import Version2 from "./versions/Version2";

function App() {
  return <Version2 />;
}

export default App;
