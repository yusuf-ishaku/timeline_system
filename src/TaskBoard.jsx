import "./App"
import { useState } from "react";
import { Data } from "./data.jsx";
export const TaskBoard = (props) =>{
    const [meuve, setMeuve] = useState("true")
    return(
    <>
    <ul className="list">
     <li id={props.id}>
        <span className="taskpane">{props.task}</span>
        <button onClick={props.deleteTask}> Delete Task</button>
        <button onClick={() =>{
           let theTask = document.getElementById(props.id);
           if(theTask.classList.contains("checked")){
             theTask.classList.remove("checked");
             setMeuve("true")
           }else if(!theTask.classList.contains("checked")){
             theTask.classList.add("checked");
             setMeuve("false");
             Data.splice("CArrion");
             console.log(Data)
           }
         }
        }>{meuve === "true" ? "Done" : "Undone"}</button>
     </li>
    </ul>
    </>
    )
}