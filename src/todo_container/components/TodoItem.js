import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo,updateTodo} from '../actions/actions';
const TodoItem = ({todo}) => {
    const [editable,setEditable] =useState(false);
    const [name,setName]=useState(todo.name);
    let dispatch = useDispatch();
    console.log(todo);
    return (
        <div>
            
            <div className="row m-0 align-item-center">
                <div>#{todo.id}</div>
                <div className="col">{editable?<input type="text" className="" onChange={(e)=>setName(e.target.value)} value={name}/>:todo.name}</div>
                <button className="btn btn-primary" onClick={() =>{
                                                dispatch(
                                                    updateTodo(
                                                        {...todo,
                                                        name}));
                                                if(!editable)
                                                    setName(todo.name)
                    
                                                setEditable(!editable);
                                                 }}>{editable?'Update':'Edit'}</button>
                <button className="btn btn-danger" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
