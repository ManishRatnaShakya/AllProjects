import {BUY_CAKE} from './cakeTypes'
const initialCake ={
    noOfCakes:10,
}


export const cakeReducer=(state=initialCake,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                noOfCakes:state.noOfCakes-action.payload
            }
        default:
            return state;
    }
}

