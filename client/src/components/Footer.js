import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { ImTwitter, ImInstagram } from "react-icons/im";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

function Footer() {
    return(
        <footer className='fondo-blue z-10'>
            <div className='flex flex-row'>
                <div className='flex flex-row w-1/2 justify-start texto-white'>
                    <p className='p-2'>ThunderBit Kiss kiss muah muah</p>
                </div>

                <div className='flex flex-row w-1/2 justify-end texto-white'>
                    <div className='p-2'>
                        <Tooltip title="Twitter">
                            <Link to='/' className="w-fit h-fit">
                                <span className=' texto-icon hover-text-blue'><ImTwitter/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Instagram">
                            <Link to='/portfolio' className="w-fit h-fit">
                                <span className="texto-icon hover-text-blue"><ImInstagram/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Fiverr">
                            <Link to='/services' className="w-fit h-fit">
                                <span className=" texto-icon hover-text-blue"><TbBrandFiverr/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Upwork">
                            <Link to='/contact' className="w-fit h-fit">
                                <span className=" texto-icon hover-text-blue"><TbBrandUpwork/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;