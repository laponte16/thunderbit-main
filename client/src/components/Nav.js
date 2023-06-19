import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import { ImHome2, ImEnvelop, ImBriefcase, ImPower } from "react-icons/im";

function Nav() {
    return(
        <nav className='fondo-gray'>
            <div className='flex flex-col justify-between'>
                
                <div className='self-end'>Redes sociales</div>

                <div className='flex flex-row'>
                    <img src={logo} className='w-1/5 p-2'></img>
                    <div className='flex flex-row w-full justify-between texto-white '>
                        <Link to='/' className="contents"><span className='w-fit h-fit text'><ImHome2/></span></Link>
                        <Link to='/portfolio' ><span className=" w-fit h-fit"><ImBriefcase/></span></Link>
                        <Link to='/services' ><span className="w-fit h-fit"><ImPower/></span></Link>
                        <Link to='/contact' ><span className=" w-fit h-fit"><ImEnvelop/></span></Link>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default Nav;