import React from "react";

function ResetButton({reseteBranches}){
    return(
        <button
            onClick={() => reseteBranches()}
        >Reset</button>
    )
}

export default ResetButton;