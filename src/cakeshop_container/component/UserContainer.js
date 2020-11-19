import React,{useEffect} from 'react';
import {connect,useSelector,useDispatch} from 'react-redux'
import {fetchUsers} from '../redux/User/userActions'
const UserContainer = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
 useEffect(()=>{
     dispatch(fetchUsers())
 },[])
 
return userData.loading?<div>loading</div>:userData.error?<div>{userData.error}</div>:(<div>
    {userData.users.map(user =><p>{user.name}</p>)}
</div>)
 
}

// const mapStateToProps=state => {
//     return{
//         userData: state.user
//     }
// }
// const mapDispatchToProps=dispatch =>{
//     return{
//         fetchUsers:()=>dispatch(fetchUsers())
//     }
// }


export default UserContainer;
