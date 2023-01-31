import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to='/' className="">Home</Link>
            <Link to='/tweets' className="">Tweets</Link>
        </nav>
    );
}

export default Nav;