import EmailEditor from "react-email-editor";
import "./App.css";
import GrapeEmailEditor from "./EmailEditor/grape-email-editor";
import grapesjs from "grapesjs";
import { useEffect, useRef } from "react";
import MyEditor from "./EmailEditor/beacas-email-editor";

function App() {
  const emailEditorRef = useRef(null);

  const getHtmlWithStyles = () => {
    let mainDiv = document.querySelector("#gjs-mdl-c");
    console.log(mainDiv);
    let secondDiv = mainDiv.querySelector("div:first-child");
    console.log(secondDiv);
    // const editor = grapesjs.editors[0]; // Assuming only one editor is present

    // if (editor) {
    //   const htmlWithStyles = editor.getHtml();
    //   console.log(htmlWithStyles);
    // }
  };
  // useEffect(() => {
  //   if (emailEditorRef.current && emailEditorRef.current.editor)
  //     emailEditorRef.current?.editor.exportHtml((data) => {
  //       //console design as html + object
  //       const { design, html } = data;
  //       console.log("exportHtml", html);
  //       console.log("design", design);
  //     });
  // }, [emailEditorRef.current]);

  return (
    <div className="App">
      {/* <EmailEditor emailEditorRef={emailEditorRef} /> */}
      <GrapeEmailEditor />
      <button onClick={getHtmlWithStyles}>Get HTML with Styles</button>
    </div>
  );
}

export default App;
