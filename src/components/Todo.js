const Todo = ({to,onComplete,deleteHandler,onEdit}) => {
    return ( 
          <div className="todo" >  
          <div>{to.text}</div>                     
        <div  >
            <button className="button" onClick={onEdit}>edit</button>
            <button className="button" onClick={onComplete}>compelet</button>
            <button className="button" onClick={deleteHandler}>Delet</button>
        </div>
    </div> );
};
 
export default Todo;