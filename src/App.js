import React, { useState } from "react";
import "./App.css"
import AddButton from "./Components/Buttons/Add";
import RemoveButton from "./Components/Buttons/Remove";
import EditButton from "./Components/Buttons/Edit";
import ResetButton from "./Components/Buttons/Reset";
import Branches from "./Components/Branch/Branches";

function App() {

  const [branchesTree, setBranches] = useState([])
  
  function removeBranch(id){

  }

  function addBranch(selectedBranch){
    if(selectedBranch){

    }
    else{
      setBranches(...branchesTree, `node ${branchesTree.length}`)
    }
  }

  return (
    <div className="App">
      <div className="treeHeader">Tree</div>
      <div className="treeBranches">
        <Branches 
          branchesTree = {branchesTree}
      /></div>
      <div className="treeButtons">
        <AddButton 
          setBranches = {(branch) => setBranches(branch)}
          branchesTree = {branchesTree}
        />
        <RemoveButton />
        <EditButton />
        <ResetButton />
      </div>
    </div>
  );
}

export default App;
