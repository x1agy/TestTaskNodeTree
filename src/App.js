import React, { useState } from "react";
import "./App.css"
import AddButton from "./Components/Buttons/Add";
import RemoveButton from "./Components/Buttons/Remove";
import EditButton from "./Components/Buttons/Edit";
import ResetButton from "./Components/Buttons/Reset";
import Branches from "./Components/Branch/Branches";

function App() {

  const [branchesTree, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState();
  const [showFormBool, setShowFormBool] = useState(false);
  
  function removeBranch(){
    if(selectedBranch){
      const newTree = branchesTree.filter(item => item.id !== selectedBranch.id);
      if(branchesTree[1].margin > 0){
        let count = 0;
        let counting = true;
        while(counting){
          if(branchesTree[count + 1].margin > 0){
            count++
          }
          else{
            counting = false;
          }
        }
        newTree.splice(0, count)
      }
      newTree.map((item, index) => item.id = index + 1)
      setBranches(newTree)
      setSelectedBranch()
    }
  }

  function addBranchToTree(){
    if(selectedBranch){
      branchesTree.splice(selectedBranch.id, 0, {name: `Node ${branchesTree.length}`, margin: selectedBranch.margin + 20})
      branchesTree.map((item, index) => item.id = index + 1)
      setBranches([...branchesTree])
      console.log(branchesTree)
    }
    else{
      setBranches([...branchesTree, {name: `Node ${branchesTree.length}`, margin: 0, id: branchesTree.length + 1}])
    }
  }

  function editBranch(value){
    if(selectedBranch){
      branchesTree.map(item => item.id === selectedBranch.id ? item.name = value : item)
      setShowFormBool(false)
    }
  }

  return (
    <div className="App">
      <div className="treeHeader">Tree</div>
      <div className="treeBranches">
        <Branches 
          branchesTree = {branchesTree}
          setSelectedBranch = {(obj) => setSelectedBranch(obj)}
          selectedBranch = {selectedBranch}
          showFormBool = {showFormBool}
          editBranch = {(value) => editBranch(value)}
      /></div>
      <div className="treeButtons">
        <AddButton 
          setBranches = {() => addBranchToTree()}
        />
        <RemoveButton 
          removeBranch = {() => removeBranch()}
        />
        <EditButton 
          setShowFormBool = {(value) => setShowFormBool(value)}
          branchesTree = {branchesTree}
        />
        <ResetButton />
      </div>
    </div>
  );
}

export default App;
