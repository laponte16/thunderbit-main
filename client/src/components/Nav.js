import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import home from './images/home.png';
import portfolio from './images/portfolio.png';
import services from './images/services.png';
import contact from './images/contact.png';

function Nav() {
    return(
        <nav className='fondo-gray'>
            <div className='flex flex-row justify-between'>
                <img src={logo} className='w-1/5 p-2'></img>
                <div className='items-end'>Redes sociales</div>
            </div>
            <div className='flex flex-row w-full justify-between texto-white '>
                <Link to='/' className="contents"><img className='p-0 m-0 w-1/12' src={home}></img></Link>
                <Link to='/portfolio' className="p-0 m-0 w-1/12"><img src={portfolio}></img></Link>
                <Link to='/services' className="p-0 m-0 w-1/12"><img src={services}></img></Link>
                <Link to='/contact' className="p-0 m-0 w-1/12"><img src={contact}></img></Link>
            </div>
        </nav>
    );
}

export default Nav;