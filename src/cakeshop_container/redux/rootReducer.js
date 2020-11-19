import {cakeReducer} from './cakes/cakeReducer';
import {iceCreamReducer} from './cakes/iceCreamReducer'
import {reducer} from './User/userReducer'
import {combineReducers} from 'redux';
// import fetchDataReducer from './sagaExample/fetchDataReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:reducer,
    
})

export default rootReducer;