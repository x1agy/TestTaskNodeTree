import React, { useEffect, useState } from "react";
import "./App.css"
import AddButton from "./Components/Buttons/Add";
import RemoveButton from "./Components/Buttons/Remove";
import EditButton from "./Components/Buttons/Edit";
import ResetButton from "./Components/Buttons/Reset";
import Branches from "./Components/Branch/Branches";

function App() {

  const [branchesTree, setBranches] = useState(() => {
    const storedValue = localStorage.getItem("tree");
    return storedValue ? JSON.parse(storedValue) : []
  });
  
  const [selectedBranch, setSelectedBranch] = useState();
  const [showFormBool, setShowFormBool] = useState(false);

  useEffect(() => {
    localStorage.setItem('tree', JSON.stringify(branchesTree));
  }, [branchesTree])

  
  function removeBranch(){
    //creating new array and giving for him filtered values, and then updated branchesTree
    if(selectedBranch){
      const newTree = branchesTree.filter(item => item.id !== selectedBranch.id);
      if(branchesTree[1].margin > 0){
        // deleted margin > 0 branches from start to next branch.margin === 0 to clear "fliying" branches 
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
      // scheme === adding new object after selected branch and giving her name and margin === selectedBranch.margin + 20
      branchesTree.splice(selectedBranch.id, 0, {name: `Node ${branchesTree.length}`, margin: selectedBranch.margin + 20})
      // then updating array by changing inner objects id by they array queue, doing it after removeBranch too
      branchesTree.map((item, index) => item.id = index + 1)
      setBranches([...branchesTree])
      console.log(branchesTree)
    }
    else{
      setBranches([...branchesTree, {name: `Node ${branchesTree.length}`, margin: 0, id: branchesTree.length + 1}])
    }
  }

  function editBranch(value){
    //just showing hidden form by changing display option (in <Branches />)
    if(selectedBranch){
      branchesTree.map(item => item.id === selectedBranch.id ? item.name = value : item)
      setShowFormBool(false)
    }
  }

  function reseteBranches(){
    setBranches([]);
    setSelectedBranch();
  }

  return (
    <div className="App">
      <div className="treeHeader">Tree</div>
      <div className="treeBranches">
        <Branches 
          // to render tree
          branchesTree = {branchesTree}
          // to set selected branch
          setSelectedBranch = {(obj) => setSelectedBranch(obj)}
          // to spy selected branch for edit button color by selected or not
          selectedBranch = {selectedBranch}
          // to show form
          showFormBool = {showFormBool}
          // to get form value for editBranch
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
          // to spy tree for alert user if tree is empty
          branchesTree = {branchesTree}
        />
        <ResetButton 
          reseteBranches = {() => reseteBranches()}
        />
      </div>
    </div>
  );
}

export default App;
