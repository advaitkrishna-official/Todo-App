import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const[toDos, setToDos] = useState([])
    // this ToDos is for storing each todo values(written by the user) in an array, Hence by default useState has an empty array.

  const[toDo, setToDo] = useState('')
  // this toDo is to store texts written by the user. Hence usestate here by Default is given as a string.
  // texts are added in the input field below.   
  function deleteElement(id){
    console.log("iddd",id)
    const position= toDos.findIndex((index)=>{
        return index.id === id
      })
      console.log(position)
      toDos.splice(position,1)
      setToDos([...toDos])
  }
  
  function addTodo (){
    setToDos([...toDos, {id: Date.now(),text:toDo,status:false}])
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hustle Culture 101!!🌝☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>{console.log(event);setToDo(event.target.value)}} type="text" placeholder="Add item..." />
         {//  value={toDo} - the value thats coming ; setToDo function is called using arrow function and "event" is used to obtain the texts 
                                                   // that the user types and its there by stored in the toDo (which by default is empty string) 
                                                                                                       }

                                                                                                    
        <i onClick={()=>addTodo()} className="fas fa-plus"></i>
        { // This is the add button; onClick we call the function setToDos that is used to add the todo entered by the user onto the toDos(which is an array)
          // the spread operator is used in toDos (...toDos) to divide the array and then the toDo is added at the end of the array. By default, toDos is an empty array.  
          // Note toDo here is taken as an object with default status as false.
          // id: Date.now() -> here to provide a unique identity to each Array of strings, We ID them on the basis of the date and time at which they are entered  
        }


      </div>
      <div className="todos">
        { toDos.map((obj)=>{ 
          // map function is used to navigate through the toDos Array. Value is written which accepts input as objects 
          // and then it is changed into text when we call {obj.text} 
          console.log(obj)
          return (
             <div className="todo">
                   <div className="left">
                    <input onChange={(event)=>{
                      // console.log(event.target.checked)
                      // console.log(obj)
                      // const newValue = toDos.filter((obj2)=>{
                      //   obj2.status = event.target.checked
                      // })
                      setToDos(toDos.filter(obj2=>{
                        if(obj2.id===obj.id){
                          obj2.status=event.target.checked
                        }
                        return obj2
                      }))
                    }} value={obj.status} type="checkbox" name="" id="" />
                    <br/>
                    <p>{obj.text}</p>
                   </div>
             <div className="right">
                   <i  onClick={()=>deleteElement(obj.id)}className="fas fa-times"></i>
             </div>
             </div>
          )
       }) }

       {toDos.map((obj)=>{
          
          if(obj.status){
              return( <div>
                       <h1>{obj.text} - Completed </h1>
                    </div>
              );
          } return null

       })
       }
      </div>
    </div>
  );
}

export default App;
