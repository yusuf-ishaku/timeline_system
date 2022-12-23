import './App.css';
import { useState } from "react";
import  { TaskBoard } from "./TaskBoard";

function App() {
  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  !tasks && localStorage.setItem("Tasks", JSON.stringify(tasks))
  const [todoList, setTodoList] = useState(tasks);
  const deleteTask = (taskName) =>{
      const newTodoList = tasks.filter(tsk => todoList.indexOf(tsk) !== taskName)
      setTodoList([...newTodoList]); 
      localStorage.setItem("Tasks", JSON.stringify(newTodoList));
      
  }
  return (
    <div className="App">
      <div className='head'>
        <div><h2>To-Do</h2></div>
        <div className='functionLine'><input className='input' ></input><button onClick={() =>{
          let task = document.querySelector(".input").value;
          task === "" ? alert("Input a task first") : tasks.push(task);
          localStorage.setItem("Tasks", JSON.stringify(tasks));
          setTodoList(tasks);
          document.querySelector(".input").value = "";
        }}>Add New Task</button></div>
        <div className='list-container'>
          <div className='info'>My Tasks</div>
          <ul className="list">
          {todoList.map((x,y) =>{
            return(
            <TaskBoard task = {x} id={y} deleteTask = {()=> {deleteTask(y)}} />
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}
// const Planet = (prop)=>{
//   return(  
//    <>
//     <h1>{prop.name}</h1>
//    </>
//   );
// }
export default App;
