import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const TodoList = ({todo,onComplete2,deleteHandler2,onupdateTodo}) => {

    const[edit,setEdit]=useState({id:null,text:''});   
    const editTodoHandler=(newvalue)=>{
        onupdateTodo(edit.id,newvalue);
        setEdit({id:null,text:'' });
    };
    const renderTodo=()=>{
        if (todo.length===0) return <p>add some todo!</p>;

        return todo.map((to)=>{
            return (
              <Todo
               key={to.id} 
               to={to} 
               onComplete={()=> onComplete2(to.id)}
               deleteHandler={()=> deleteHandler2(to.id)}
               onEdit={()=> setEdit(to)}
                />
            )
        })
        
            
    };
    return <div>{edit.id ? <TodoForm submitTodo={editTodoHandler} edit={edit} /> : renderTodo()} </div>;
};
 
export default TodoList;