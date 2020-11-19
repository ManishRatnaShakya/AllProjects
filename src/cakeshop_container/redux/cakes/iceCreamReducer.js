import {BUY_ICECREAM} from './cakeTypes'
const initialIcecream ={
    noOfIcecream:20,
}
export const iceCreamReducer=(state=initialIcecream,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIcecream:state.noOfIcecream-1
            }
        default:
            return state;
    }
}