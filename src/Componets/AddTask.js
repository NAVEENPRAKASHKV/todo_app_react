import React, { useState } from 'react'

const AddTask = (props) => {
    const {addTask} =props

    const [inputValue,setInputValue] =useState("");

    const changeValue = (e)=>{
        setInputValue(e.target.value)
    }
    const addItem = ()=>{
        addTask(inputValue)
        setInputValue("")
    }

   

  return (
    <div className='border-2 border-solid border-black  mx-20 p-3 rounded-lg shadow-lg'>
         <input onChange={changeValue} value={inputValue}  className='w-10/12 p-1 rounded-lg mx-4 '  /> 
         <button onClick={addItem} className='border-2 px-3 bg-green-300 rounded-xl font-bold shadow-lg'>Add</button>
    </div>
  )
}

export default AddTask