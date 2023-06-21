import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import logo from './images/logo.png';
import { ImHome2, ImEnvelop, ImBriefcase, ImPower } from "react-icons/im";

function Nav() {
    return(
        <nav className='fondo-blue'>
            <div className='flex flex-col justify-between'>
                
                <div className='flex flex-row'>
                    <img src={logo} className='w-1/5 p-2'></img>
                    <div className='flex flex-row w-full justify-around texto-white self-center'>
                        <Tooltip title="Home">
                            <Link to='/' className="w-fit h-fit "><span className=' texto-icon hover-text-blue'><ImHome2/></span></Link>
                        </Tooltip>
                        <Tooltip title="Portfolio">
                            <Link to='/portfolio' className="w-fit h-fit"><span className="texto-icon hover-text-blue"><ImBriefcase/></span></Link>
                        </Tooltip>
                        <Tooltip title="Services">
                            <Link to='/services' className="w-fit h-fit"><span className=" texto-icon hover-text-blue"><ImPower/></span></Link>
                        </Tooltip>
                        <Tooltip title="Contact Us">
                            <Link to='/contact' className="w-fit h-fit"><span className=" texto-icon hover-text-blue"><ImEnvelop/></span></Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default Nav;