import React, { useState } from "react";
import "./Branches.css"

function Branches({branchesTree, setSelectedBranch, selectedBranch, showFormBool, editBranch}){
    const formDisplay = showFormBool ? "inline-block" : "none";
    const [inputValue, setInputValue] = useState("")
    
    return(
        <div className="branchesDiv">
            {branchesTree.map(branch => {
                const buttonBorderStyle = selectedBranch ? (selectedBranch.id === branch.id ? "2px solid green" : "1px solid green") : "1px solid green"
                return(
                    <button 
                        className="branchesButton" 
                        style={{marginLeft: branch.margin, border: buttonBorderStyle}} 
                        onClick={() => setSelectedBranch(
                            {id: branch.id, margin: branch.margin, name: branch.name}
                            )
                        }
                    >{branch.name}</button>
                )
            })}
            <form
                style={{display: formDisplay}}
                onSubmit={(e) => {
                    e.preventDefault();
                    editBranch(inputValue);
                    setInputValue("");
                }}
            >
                <input 
                    type="text" 
                    required 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Branches;