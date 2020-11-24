import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {getData} from '../redux/actions'
const Posts = ({articles,getAPIData}) => {
    console.log(articles.slice(0,7))
    useEffect(()=>{
        getAPIData()

    },[]);
    return (
        <div>
            <p>POSTS</p>
            {articles.map((el,index)=>{
                return(<div key={index}>{el.title}</div> )
            })}
        </div>
    );

}
const mapStateToProps=(state)=>
  (  {articles:state.articles.remoteArticles.slice(0,9)})

const mapDispatchToProps=(dispatch)=>
    ({getAPIData:()=>dispatch(getData())})


export default connect(mapStateToProps,mapDispatchToProps)(Posts);
