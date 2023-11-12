import React from "react";
import "./App.css"
import AddButton from "./Components/Buttons/Add";
import RemoveButton from "./Components/Buttons/Remove";
import EditButton from "./Components/Buttons/Edit";
import ResetButton from "./Components/Buttons/Reset";

function App() {
  return (
    <div className="App">
      <div className="treeHeader">Tree</div>
      <div className="treeBranches"></div>
      <div className="treeButtons">
        <AddButton />
        <RemoveButton />
        <EditButton />
        <ResetButton />
      </div>
    </div>
  );
}

export default App;
