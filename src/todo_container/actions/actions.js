// export const increment =()=>{
//     return {
//         type:'increment',
//     }
// }
// export const decrement =()=>{
//     return {
//         type:'decrement',
//     }
// }

// export const reset =()=>{
//     return {
//         type:'reset',
//     }
// } 
// import axios from 'axios'
export const addTodo =(todo)=>{
    return{
        type:'ADD_TODO',
        payload:todo,
    }
}

export const deleteTodo =(todoId)=>{
    return{
        type:'DELETE_TODO',
        payload:todoId,
    }
}
export const updateTodo =(todo)=>{
    return{
        type:'UPDATE_TODO',
        payload:todo,
    }
}

// export const fetchUsers =(todo)=>{
//     return (dispatch)=>{
//         dispatch(fetchUsersRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response)=>{
//             const users = response.data
//             dispatch(addTodo(users))
//         })
//         .catch(err=>{
//             const errMsg= err.message
//         })
//     }
// }