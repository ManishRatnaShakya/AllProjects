import { FETCH_USERS_REQUEST ,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./userTypes";
const initialState ={
    loading: false,
    users:[],
    error:''
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            console.log("i am in FETCH_USERS_SUCCESS",action.payload)
           return{
               loading:false,
               users:action.payload,
               error:''
           } 
        case FETCH_USERS_REQUEST:
             console.log("i am in FETCH_USERS_requesT")
           return{
               loading:true,
             
           } 
        case FETCH_USERS_FAILURE:
             console.log("i am in FETCH_USERS_FAILURE")
           return{
               loading:false,
               users:[],
               error:action.payload
           } 
        default:
            return state;
    }
}