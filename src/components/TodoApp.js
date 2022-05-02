import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const[todo,setTodo]=useState([]);    


    const submitTodo=(input)=>{
    // console.log(input);
        const newTodo={
            id:Math.floor(Math.random() * 1000 ),
            Text:input,
            isCompleted:false, 
        };       
        setTodo([...todo, newTodo]);
    };

    const compeletTodo=(id)=>{
        
       const index= todo.findIndex((find)=>find.id===id);
       const selectedtodo={...todo[index]};
       selectedtodo.isCompleted=!selectedtodo.isCompleted;
       const updatedtodo=[...todo];
       updatedtodo[index]=selectedtodo;
       setTodo(updatedtodo);
       
    }; 
    const deleteHandler2=(id)=>{
        console.log(id);
       const remove= todo.filter((find2)=>find2.id!==id);
       setTodo(remove);
    } ; 
    const updateTodo=(id,newvalue)=>{
        const index= todo.findIndex((find)=>find.id===id);
       const selectedtodo={...todo[index]};
       selectedtodo.text=newvalue;
       const updatedtodo=[...todo];
       updatedtodo[index]=selectedtodo;
       setTodo(updatedtodo);
       
    };

    return ( <div className="container">    
        <TodoForm submitTodo={submitTodo} />
        <TodoList deleteHandler2={deleteHandler2} 
        onComplete2={compeletTodo} 
        todo={todo}
         onupdateTodo={updateTodo} />
    </div> );
};
 
export default TodoApp;