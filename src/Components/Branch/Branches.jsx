import React from "react";
import "./Branches.css"

function Branches({branchesTree, setSelectedBranch, selectedBranch}){

    return(
        <div className="branchesDiv">
            {branchesTree.map(branch => {
                const buttonBorderStyle = selectedBranch ? (selectedBranch.id === branch.id ? "2px solid green" : "1px solid green") : "1px solid green"
                return(
                    <button className="branchesButton" style={{marginLeft: branch.margin, border: buttonBorderStyle}} onClick={() => setSelectedBranch({id: branch.id, margin: branch.margin})}>{branch.name}</button>
                )
            })}
        </div>
    )
}

export default Branches;