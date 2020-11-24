import React from 'react';
import Posts from './Posts';
import Photos from './Photos' 
const MainFile = () => {
    return (
        <div>
            <h2>Posts</h2>
            <Posts/>
            <h2>Photos</h2>
             <Photos/> 
        </div>
    );
}

export default MainFile;
