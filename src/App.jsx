import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <div>
      <Create></Create>
      <Notes></Notes>
    </div>
  );
}

export default App;
