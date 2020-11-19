import React,{useState} from 'react';
import { addTodo } from '../actions/actions';
import {useDispatch,useSelector} from 'react-redux';
const TodoInput = () => {
    let dispatch = useDispatch();
    let todos = useSelector(state => state.todoList)
    const [name,setName]=useState();
    
    return (
        <div className="row m-2">
            <input type="text" className="col form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button className=" btn btn-primary mx-2" onClick={()=>{dispatch(addTodo({
                id:todos.length===0 ?1:todos[todos.length-1].id+1,
                name:name

            }));
            setName('')}
           }>Add</button>
        </div>
    );
}

export default TodoInput;
