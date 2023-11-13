import React, { useState } from "react";

function EditButton({setShowFormBool, branchesTree}){
    const [buttonBGStyle, setButtonBG] = useState("white")
    const [formState, setFormState] = useState(false)

    function error(){
        setButtonBG("red")
        setTimeout(() => {
            setButtonBG("white")
        }, 2000)
    }
    
    return(
        <button 
            onClick={() => {
                if(branchesTree.length){
                    if(!formState){
                        setShowFormBool(true)
                        setFormState(true)
                        setButtonBG("gray")
                    }
                    else{
                        setShowFormBool(false)
                        setFormState(false)
                        setButtonBG("white")
                    }
                }
                else{
                    error()
                }
            }}
            style={{backgroundColor: buttonBGStyle, transition:"0.3s"}}
        >Edit</button>
    )
}

export default EditButton;