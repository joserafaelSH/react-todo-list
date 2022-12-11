import { BoxNewTasksStyles } from "./BoxNewTasksStyles"
import { useContext, useState, KeyboardEvent } from "react"
import { Item } from "../../Types/Item"
import React from "react"
import { ItemContextType, ItemCtx } from "../../Contexts/ItemContext"


export const BoxNewTasks = () => {

    const [inputText, setInputText] = useState<string>("");

    const {saveList} = useContext(ItemCtx) as ItemContextType  ;

    const resetInput = () => {
        setInputText("");
    }

    const handleKeyUp = (e:KeyboardEvent) =>{
        if(e.code === "Enter" && inputText !== ""){
            console.log("Criando a task: ", inputText);
            saveList({id: Math.floor(Math.random() * 1000) , name: inputText, done: false});
            resetInput();
        }
    }

    const handleCreateTask = () => {
        if(inputText !== ""){
            console.log("Criando a task: ", inputText);
            saveList({id: Math.floor(Math.random() * 1000) , name: inputText, done: false});
            resetInput();
        }
    }

    return (
        <BoxNewTasksStyles>
            <div className="image" onClick={handleCreateTask}>➕</div>
            <input
                type="text"
                placeholder="Add new Task"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </BoxNewTasksStyles>
    )
}