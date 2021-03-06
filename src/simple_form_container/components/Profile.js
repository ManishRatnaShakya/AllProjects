import React,{useState} from 'react'
import "./Profile.css";
import {useSelector,useDispatch} from 'react-redux';
import {deleteData,updateData} from '../redux/actions'
function Profile(props) {
    const [editable,setEditable]=useState(false);
    let dispatch = useDispatch();
    let dataValue;
     const data = useSelector(state => state)
    let {match} =  props;
    let {phone} =match.params;
    console.log("from profile",phone)
    return (
        <div>
        
        <div className="profile" >
            <span ><img src="data:image/jpeg;base64,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" alt="No image"></img></span>
            <span>
                {data.length>0?data.map
                ((d)=>d.phone===phone?
                <div>
                   
         <p> Name :{d.username}</p>
        <p>Phone : {d.phone}</p>
        <p> Email : {d.email}</p>
        <p>DateOfBirth : {d.dob}</p>
        <p>City : {d.city}</p>
         <p>District : {d.district}</p>
         <p>Provience : {d.provience}</p>
         <p>Country : {d.country}</p></div>:'nothing to show'):'nothing to show'}
           
            
           </span>
        </div>
     
        
        {editable?<div>You can edit comming soon </div>:''}
        </div>
    )
}

export default Profile
