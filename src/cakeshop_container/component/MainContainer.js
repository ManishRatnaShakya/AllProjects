import React from 'react'
import CakeContainer from './CakeContainer';
import UserContainer from './UserContainer';
export default function MainContainer() {
    return (
        <div>
            <CakeContainer/>
            <br/>
            <br/>
            <br/>
            <h2>
                These are the list of Users from API 
            </h2>
            <UserContainer/>
        </div>
    )
}
