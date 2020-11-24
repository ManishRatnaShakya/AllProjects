import React,{useEffect} from 'react';
import {getPhotos} from '../redux/actions';
import { connect,useSelector, useDispatch,useReducer } from 'react-redux';
import './Photos.css'
const Photos = () => {
    const photos=useSelector(state => state.photo.photos.slice(0,7))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPhotos())
    },[])
    console.log("from photos",photos);
    return (
        <div className="photos">
            
        {photos.map((photo=>(
               <div key={photo.id}>
                   <h3>{photo.title}</h3>
                   <img src={photo.url} alt="No Image"/>
               </div>
        )))}
        </div>
    );
}
 
// const mapStateToProps=(state) =>({
//     photos: state.photo.photos.slice(0,7)
// })

// const mapDispatchToProps=(dispatch) =>({
//     getPhotos: () => dispatch(getPhotos())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Photos);
export default Photos;
