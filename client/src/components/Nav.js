import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className='fondo-gray'>
            <div className='flex flex-row justify-between'>
                <span className='items-start'>Logo</span>
                <div className='items-end'>Redes sociales</div>
            </div>
            <div className='flex flex-row justify-center texto-white'>
                <Link to='/' className="pr-4">Home</Link>
                <Link to='/' className="pr-4">Portfolio</Link>
                <Link to='/' className="pr-4">Services</Link>
                <Link to='/' className="">Contact</Link>
            </div>
        </nav>
    );
}

export default Nav;