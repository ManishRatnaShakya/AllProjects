import React from 'react';
import {Link} from 'react-router-dom';
const Indicator = () => {
    return (
        <div>
            <Link to='/todo'>
            Todo app with Redux basics
            </Link>
            <br/>
            <Link to='/cake_shop'>
                Cake shop app with Redux basic and Redux saga for an API call
            </Link>
            <br/>
            <Link to='/simple_form'>
               Simple form submission with Redux 
            </Link>
            <br/>
            <Link to='/saga_example'>
               Simple saga example with API calls
            </Link>
            <br/>
            <Link to='/translate'>
               Simple translate app
            </Link>

        </div>
    );
}

export default Indicator;
