import EmailEditor from "react-email-editor";
import "./App.css";
import GrapeEmailEditor from "./EmailEditor/grape-email-editor";
import grapesjs from "grapesjs";
import { useEffect, useRef } from "react";
import EasyEmailEditor from "./EmailEditor/easy-email-editor";

function App() {
  return (
    <div className="App">
      {/* <EmailEditor emailEditorRef={emailEditorRef} /> */}
      {/* <GrapeEmailEditor />  */}
      <EasyEmailEditor />
    </div>
  );
}

export default App;
