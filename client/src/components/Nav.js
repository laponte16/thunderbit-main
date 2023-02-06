import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to='/' className="">Home</Link>
        </nav>
    );
}

export default Nav;