import {SEND_REQUEST,SEND_REQUEST_SUCCESS,SEND_REQUEST_FAILURE} from './types';

export function fetchData(data){
    return{
        type:SEND_REQUEST,
        payload:data
    }
}
export function fetchDataSuccess(user){
    return{
        type:SEND_REQUEST,
        payload:user
    }
}
export function fetchDataFailure(error){
    return{
        type:SEND_REQUEST,
        payload:error
    }
}