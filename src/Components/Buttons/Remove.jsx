import React from "react";

function RemoveButton({removeBranch}){
    return(
        <button onClick={() => removeBranch()}>Remove</button>
    )
}

export default RemoveButton;