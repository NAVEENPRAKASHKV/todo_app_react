import React, { useState } from "react";
import ListTask from "./ListTask";
import AddTask from "./AddTask";

const Todo = () => {
    const [tasks,setTask] =useState([
        {title:"html"},
    
    ])
    const addTask =(title)=>{
        setTask([...tasks,{title}])
    }
    const removeTask =(index)=>{
        const newArr=[...tasks];
        newArr.splice(index,1);
        setTask(newArr)

    }
  return (
    <div className=" bg-black w-screen h-screen overflow-y-auto relative">
      <div className="w-8/12 bg-orange-300 rounded-2xl absolute left-1/2 top-28 transform -translate-x-1/2 ">
        <div className="m-6">
          <h1 className="text-center font-bold text-4xl">TODO APP</h1>
        </div>
        <div>
          <AddTask addTask={addTask} />
        </div>
        <div>
            {tasks.map((todo,index)=>{
                return (<ListTask key={index} todo={todo} removeTask={removeTask} index={index} />)
            })}
          
        </div>
      </div>
    </div>
  );
};

export default Todo;
