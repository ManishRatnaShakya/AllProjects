import React from 'react';
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
const TodoList = () => {
    let todos = useSelector(state => state.todoList)
    return (
        <div>
            {
                todos.map(todo =>{
                    return(
                        <div key={todo.id}>
                    
                          <TodoItem todo={todo}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TodoList;
