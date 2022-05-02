import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const[input,setInput]=useState('');
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    const inputHandler=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    };
    const submitHandler=(e)=> {
        e.preventDefault();

        if(!input){
            alert('enter to do!');
            return;
        }

        props.submitTodo(input) ;
        setInput('') ;
    };

    return (
        <form onSubmit={submitHandler} >  
        <div className="formcontrol">
            <input 
             type='text' 
            value={input} 
            onChange={inputHandler}
             placeholder={props.edit ? 'updated value...':'add new to do...'}
             ref={inputRef}
             />
            <button type="submit">{props.edit ? 'update':'add'}</button>
        </div>    
            
                        
          </form>
      );
};
 
export default TodoForm;