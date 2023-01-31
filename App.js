import React, { useState } from 'react'
import useList from './Component.js/Custom-hoooks/Uselist'
import './App.css'
export default function App() {
 
  const{list, push, pull}=useList()
  const[todo,setTodo]=useState("")
  
  const onsubmithandler=(event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")
    if(!todo){
      alert("You need to type something")
      return;
    }
  }
  
  return (
    <>
      <div className='todo-container'>
      <label><h1 className='bigred'>!!Add Todo List here!!</h1></label><br></br>
      <header>
        <form onSubmit={onsubmithandler}>
          <input type="text" value ={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button type='submit'>Add Todo</button>
        </form>
        <h3>
          {list.map((listItem,index)=>{
            return(
              <div key ={index}><br></br>
                <li>{listItem}</li>
                <button onClick={()=>{pull(index)}}>Remove</button>
              </div>
            )
          })}
        </h3>
      </header>
    </div>
    </>
  )
}
