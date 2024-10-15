import React from "react";

const ListTask = (props)=>{
     const {todo,index,removeTask}=props

    return (
        <div className="border-2 border-solid border-black my-5 mx-20 p-3 rounded-lg shadow-lg flex">
            <p className='w-10/12 p-1 rounded-lg mx-4 text-lg font-bold '>{todo?.title || "no title"}</p>
            <button className='border-2 mx-2  px-3 bg-gray-400 rounded-xl font-bold shadow-lg'>Edit </button>
            <button onClick={()=>{removeTask(index)}} className='border-2 mx-2 px-3 bg-red-600 rounded-xl font-bold shadow-lg'>Delete </button>
        </div>
    )
}

export default ListTask