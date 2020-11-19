// import counterReducer from './counter';
// import loggedReducer from './isLogged';
// import {combineReducers} from 'redux';

import {todos} from '../states/states';
// const allReducers = combineReducers({
//     counter: counterReducer,
//     logged: loggedReducer
// })
const allReducers = (state=todos,action) =>{
     let newTodos;
    switch (action.type){
        case 'ADD_TODO':
            newTodos=[...state]
            newTodos.push(action.payload)
            return newTodos;
        case 'DELETE_TODO':
            newTodos =[...state];
            newTodos = newTodos.filter(todo =>todo.id !== action.payload)
            return newTodos;
        case 'UPDATE_TODO':
            newTodos = [...state];
            let index=-1;
            for (let i=0; i<newTodos.length; i++){
                index+=1;
                if(newTodos[i].id===action.payload.id){
                    break;
                }
            }
            if(index!==-1){
                newTodos[index]= action.payload;
                return newTodos
            }

         case 'SET_TODO': {
             return {...state,name:action.payload}
         }
            
           

        default:
            return state;
    }
}


export default allReducers;