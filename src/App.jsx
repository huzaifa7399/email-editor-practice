import { Route, Routes } from "react-router-dom";
import "./App.css";
import GrapeEmailEditor from "./EmailEditor/grape-email-editor";
import HomePage from "./pages";
import EasyEmailEditor from "./EmailEditor/easy-email-editor";
import EmailEditorPreview from "./EmailEditor/react-email-editor";
import { useRef } from "react";

function App() {
  const emailEditorRef = useRef(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grape-editor" element={<GrapeEmailEditor />} />
        <Route path="/easy-editor" element={<EasyEmailEditor />} />
        <Route
          path="/unlayer-editor"
          element={<EmailEditorPreview emailEditorRef={emailEditorRef} />}
        />
      </Routes>
    </div>
  );
}

export default App;
