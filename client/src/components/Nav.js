import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import logo from './images/logo.png'

function Nav() {
    return(
        <nav className='fondo-gray'>
            <div className='flex flex-row justify-between'>
                <img src={logo} className='w-1/5 p-2'></img>
                <div className='items-end'>Redes sociales</div>
            </div>
            <div className='flex flex-row justify-center texto-white'>
                <Link to='/' className="pr-4">Home</Link>
                <Link to='/portfolio' className="pr-4">Portfolio</Link>
                <Link to='/services' className="pr-4">Services</Link>
                <Link to='/contact' className="">Contact</Link>
            </div>
        </nav>
    );
}

export default Nav;