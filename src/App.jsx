import { Route, Routes } from "react-router-dom";
import "./App.css";
import GrapeEmailEditor from "./EmailEditor/grape-email-editor";
import HomePage from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/email-template-editor">
          <Route path="/" element={<GrapeEmailEditor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
