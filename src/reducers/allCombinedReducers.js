import allReducers from '../todo_container/reducers/reducer';
import {combineReducers} from 'redux';
// import cakeReducer from '../cakeshop_container/redux/cakes/cakeReducer';
import {reducer} from '../cakeshop_container/redux/User/userReducer'
import { cakeReducer } from './../cakeshop_container/redux/cakes/cakeReducer';
import {iceCreamReducer} from '../cakeshop_container/redux/cakes/iceCreamReducer';
import {allFormReducers} from '../simple_form_container/redux/reducers';
const allCombinedReducers= combineReducers({
    todoList:allReducers,
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:reducer,
    simpleForm:allFormReducers,
})

export default allCombinedReducers;
