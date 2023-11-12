import React from "react";

function AddButton({setBranches, branchesTree}){
    return(
        <button
            onClick={() => setBranches()}
        >Add</button>
    )
}

export default AddButton;