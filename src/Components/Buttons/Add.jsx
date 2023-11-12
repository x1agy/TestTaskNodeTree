import React from "react";

function AddButton({setBranches, branchesTree}){
    return(
        <button
            onClick={() => setBranches([...branchesTree, `Node ${branchesTree.length}`])}
        >Add</button>
    )
}

export default AddButton;