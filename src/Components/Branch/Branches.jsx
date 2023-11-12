import React from "react";

function Branches({branchesTree}){
    return(
        <div>
            {branchesTree.map(branch => {
                const item = `\t${branch}\n`;
                return(
                    <p>{item}</p>
                )
            })}
        </div>
    )
}

export default Branches;