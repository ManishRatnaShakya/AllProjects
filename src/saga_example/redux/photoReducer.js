import {PHOTO_REQUESTED,PHOTO_FETCHED,PHOTO_FETCHED_ERROR} from './actions';

const initialState = {
    photos:[],
}

function photoReducer(state=initialState, action){
    if(action.type === PHOTO_FETCHED){
        return Object.assign({},state,{
            photos:state.photos.concat(action.payload)
        })
    }
    return state;
}

export default photoReducer;