import EmailEditor from "react-email-editor";
import "./App.css";
import GrapeEmailEditor from "./EmailEditor/grape-email-editor";
import grapesjs from "grapesjs";

function App() {
  const getHtmlWithStyles = () => {
    const editor = grapesjs.editors[0]; // Assuming only one editor is present

    if (editor) {
      const htmlWithStyles = editor.getHtml();
      console.log(htmlWithStyles);
    }
  };

  return (
    <div className="App">
      {/* <EmailEditor /> */}
      <GrapeEmailEditor />
      <button onClick={getHtmlWithStyles}>Get HTML with Styles</button>
    </div>
  );
}

export default App;
