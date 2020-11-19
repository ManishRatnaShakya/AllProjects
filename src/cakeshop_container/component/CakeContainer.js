import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {buyCake} from '../redux/cakes/cakeAction';
import {buyIceCream} from '../redux/cakes/iceCreamActions'
import {Button,Alert,InputGroup,FormControl} from 'react-bootstrap'
const CakeContainer = () => {
    const [number,setNumber]=useState(1); 
    const cake = useSelector(state=>state.cake)
    const iceCream = useSelector(state=>state.iceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {cake.noOfCakes}</h2>
            <InputGroup size="sm" className="mb-3"><FormControl type="number" onChange={(e)=>setNumber(e.target.value)}/></InputGroup>
            <Button onClick={()=>dispatch(buyCake(number))}>Buy cake</Button>
            {cake.noOfCakes<3?cake.noOfCakes===0?
            <Alert  variant="warning">
               Cakes are less than three
            </Alert>:<Alert  variant="danger">
               cakes are not in store
            </Alert>:''}
            <h2>Num of Icecreams - {iceCream.noOfIcecream}</h2>
            <Button onClick={()=>dispatch(buyIceCream())}>Buy Icecream</Button>
        </div>
    );
}


export default CakeContainer;
