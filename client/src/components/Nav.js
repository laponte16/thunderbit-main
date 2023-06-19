import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import { ImHome2, ImEnvelop, ImBriefcase, ImPower } from "react-icons/im";

function Nav() {
    return(
        <nav className='fondo-blue'>
            <div className='flex flex-col justify-between'>
                
                <div className='self-end'>Redes sociales</div>

                <div className='flex flex-row'>
                    <img src={logo} className='w-1/5 p-2'></img>
                    <div className='flex flex-row w-full justify-around texto-white self-center'>
                        <Link to='/' className="w-fit h-fit "><span className=' texto-icon hover-text-blue'><ImHome2/></span></Link>
                        <Link to='/portfolio' className="w-fit h-fit"><span className="texto-icon"><ImBriefcase/></span></Link>
                        <Link to='/services' className="w-fit h-fit"><span className=" texto-icon"><ImPower/></span></Link>
                        <Link to='/contact' className="w-fit h-fit"><span className=" texto-icon"><ImEnvelop/></span></Link>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default Nav;